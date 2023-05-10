import sqlite3
from sqlite3 import Error
from constants import TABLE_NAME
from bitcoin_timestamp import BitcoinTimestamp
from custom_util import create_database

class DatabaseConnection:

    def __init__(self):
        """
        class constructor: generates a database connection object
        """
        self.__db = create_database()

    def insert_timestamp(self, bitcoin: BitcoinTimestamp):
        """
        inserts a bitcoin timestamp into the database

        :param bitcoin_timestamp:
            the bitcoin timestamp
        :type bitcoin_timestamp:
            BitcoinTimestamp
        :return:
            boolean indicating if the operation was successful or not
        :rtype:
            bool
        """
        try:
            # get cursor
            cursor = self.__db.cursor()
        except Error as e:
            print(e)
            return False

        try:
            # TODO (5.3.2)  
            # insert sql query
            sql = f"INSERT * INTO TABLE_NAME (timestamp, price) VALUES (%s, %f)"
            VALUES = (bitcoin.timestamp, 0)

            # execute sql query
            cursor.execute(sql, VALUES)

            # commit to db
            self.__db.commit()

            # close
            cursor.close()
        
            return True
        except Exception as e:
            print(e)
            return False
      
    def get_all_timestampes(self):
        """
        gets all bitcoin timestamps in the database

        :return:
            a list of bitcoin timestamps
        :rtype:
            list[BitcoinTimestamp]
        """
        try:
            output = []
            
            # TODO (5.3.1)
            DATABASE_NAME = 'BitcoinDB-demo.db'
            TABLE_NAME = 'Bitcoin'

            # TODO: Connect to database
            try: # always use a try-catch statement to prevent your programs from crashing in case of a failure
                db = sqlite3.connect(DATABASE_NAME) 
            except Error as e:
                print(e)

            # TODO: get cursor
            cursor = db.cursor()

            # TODO: insert SQL query
            sql = "SELECT * FROM '{}';".format(TABLE_NAME)

            # TODO: execute sql query
            cursor.execute(sql)

            # TODO: fetch all results obtained
            results = cursor.fetchall()

            # TODO: close
            cursor.close()

            # convert results to BitcoinTimestamp objects and append to output
            for listElement in results:
                dbc = BitcoinTimestamp(listElement[0], listElement[1])
                output.append(dbc)

            return output
        except Error as e:
            print(e)
            return []