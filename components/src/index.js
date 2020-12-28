import React from 'react'; 
import ReactDOM from 'react-dom';  // this is part of webpack
import faker from 'faker'; //you can use faker to generate random posts 
import ComponentDetail from './ComponentDetail';  // this is webpack
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <ComponentDetail 
                    author="Vaibhav" 
                    timeAgo="Today at 6:00PM" 
                    blogPost="This is my food blog" 
                    avatar={faker.image.food()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail 
                    author="Ashish" 
                    timeAgo="Today at 6:45PM" 
                    blogPost="This is my daily post" 
                    avatar={faker.image.business()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail 
                    author="Patil"
                    timeAgo="Yesterday at 7:00PM" 
                    blogPost="This is my product post" 
                    avatar={faker.image.transport()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));