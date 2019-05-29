import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import {users,profilePics,defaultPic} from '../index'
import Button from '../components/Button';
import Image from '../components/Image';
import InputField from '../components/InputField';
import Profile from '../components/Profile';
import Form from '../components/Form';
import {action} from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'
import centered from '@storybook/addon-centered/react';
import withInfo from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/react'; 

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced'},
    { name: 'facebook', value: '#3b5998' },
  ],
});
addDecorator(centered);

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
.addDecorator(storyFn => <div style={{height: '50px', width: '70px'}}>{storyFn()}</div>)
  .add('Normal button', () => (
      <Button onClick={action('clicked')} content = {text('Button label','click')} type = "button"  />
    
  ),{ notes: 'added notes'})
  .add('Form button', () => (
      <Button onClick={action('clicked')} content = {text('Button label','submit')} type = "submit"  />
    
  ));

storiesOf('Components|Image',module)
  .add('Square image', () => (
    <Image isRounded={false} url="https://pbs.twimg.com/profile_images/612008607152877572/OzTVFN9K_400x400.jpg" alt="profile picture" />
  ))
  .add('Round image', () => (
    <Image isRounded={true} url="https://pbs.twimg.com/profile_images/612008607152877572/OzTVFN9K_400x400.jpg" alt="profile picture" />
  ));

storiesOf('Components|Input Field',module)
  .addDecorator(storyFn => <div style = {{height: '50px', width: '200px'}}>{storyFn()}</div>)
  .add('Text field', () => (
    
      <InputField label="username"/>
    
  ))
  .add('Password field', () => (
      <InputField label="password"/>
    
  ));

storiesOf('Components|Profile',module)
  .addDecorator(withKnobs)
  .add('Profile', () => {
    const user = text('username','ryuzaki');
   return (<Profile user={user} profilePic={profilePics[users[0].username]} defaultPic={defaultPic}/>);
  })
  .add('different user',() => (
    <Profile user={users[1].username} profilePic={profilePics[users[1].username]} defaultPic={defaultPic}/>
  ))
  .add('No profile picture',() => (
    <Profile user={users[3].username} defaultPic={defaultPic}/>
  ));
 
storiesOf('Components|Form',module)
  .addDecorator(storyFn => <div style={{height: '315px', width: '350px', border: '1px solid', backgroundColor: 'white'}}>{storyFn()}</div>)
  .add('Login form',() => (
      <Form credentials={['username','password']} submitContent="Login" />
    
  ))
  .add('Different fields', () => (
      <Form credentials={['email']} submitContent="Login" />
    
  ))
  .add('With error message',() => (
      <Form credentials={['username','password']} submitContent="Login" errorMessage="User not found" />
    
  ));