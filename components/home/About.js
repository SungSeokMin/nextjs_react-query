import React from 'react';
import classes from './About.module.scss';
import Title from '../text/Title';
import Text from '../text/Text';

function About() {
  return (
    <div className={classes.about}>
      <Title>What is meal ?</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi provident veniam magni architecto ea sint mollitia ut eos quam ratione vitae ducimus, omnis, ipsa nesciunt doloremque. Fuga quod vero quidem dicta eveniet iusto blanditiis, doloribus aliquam velit! Dignissimos nisi odit quam ipsa enim dolores ut alias beatae dolorem quibusdam?</Text>
    </div>
  );
}

export default About;
