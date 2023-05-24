import React from 'react';
import { FloatButton } from 'antd';
import { CommentOutlined, EditOutlined, QuestionOutlined } from "@ant-design/icons";
import Home from "../Pages/Home"


const FloatingButton = ({ toggleChatbox }) => {
    const handleToggleChatbox = () => {
      toggleChatbox();
    };

  return (
    <div>
      <FloatButton.Group 
        icon={<QuestionOutlined style={{ color: '#009AAB' }}/>} 
        style={{ right: 50, top: 100 }} 
        shape="circle"
        tooltip="Chat"
        trigger='hover'
      >
        <FloatButton 
          icon={<CommentOutlined style={{ color: 'green' }} />}
          shape="circle"
          tooltip="Chat with Chat GPT"
          onClick={handleToggleChatbox}
        />
        <FloatButton 
          icon={<EditOutlined style={{ color: 'green' }} />} 
          style={{ color: "#009AAB" }} 
          shape="circle"
          tooltip="Share Feedback!"
          onClick={handleToggleChatbox}
        />
      </FloatButton.Group>
    </div>
  );
};

export default FloatingButton;
