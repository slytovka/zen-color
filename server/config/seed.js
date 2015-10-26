/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});


/////////Colors data//////////////
var Color = require('../api/color/color.model');

Color.find().remove(function() {
  Color.create(
    {
      name: 'yellow',
      info: 'Finding common ground is the game you play best.You calm troubled situations, bridge differences. Your awareness of others perspectives allows you to express contrary, unpopular feelings without offending anyone. By keeping people listening, you allow solutions and possibilities to unfold.',
      keyWords: 'REALISTIC, DIPLOMATIC, GIVING',
      power: 'WISDOM TO KNOW WHAT IS NEEDED',
      motivation: 'PERSONAL GROWTH'
    },
    {
      name: 'blue',
      info: 'You are a dreamer and a visionary - wistful, imaginative, and eccentric. You are preoccupied with the future. Your dreams give you the mental discipline to concentrate and stay on track. You need to justify your life by making a positive impact on the world, even on those you dont know.',
      keyWords: 'PLANNER, INITIATOR, VISIONARY',
      power: 'ABILITY TO VISUALIZE THE FUTURE',
      motivation: 'TO JUSTIFY YOUR EXISTENCE'
    },
    {
      name: 'red',
      info: 'You know exactly what you want. Money, power, and status give you a sense of security but ultimately you use them as a means of expression. This is your primary goal. You are not one to hoard your wealth. On the contrary, you would give the shirt off you back for those you are concerend about.',
      keyWords: 'PRACTICAL, RESOURCEFUL, DIRECT',
      power: 'USE EXPERIENCE TO IMPROVE THINGS',
      motivation: 'TO BETTER CONTROL YOUR WORLD'
    },
    {
       name: 'green',
       info: 'You are the perfect audience for others problems. They interpret your concerns as encouragement to talk about their lives. They feel you can see beyond ouward appearances and truly understand who they are. Like fertile soil, you nurture people so that their dreams can grow.',
      keyWords: 'NURTURING, CONCERNED, COMFORTABLE',
      power: 'CREATING SUPPORTIVE ENVIRONMENTS',
      motivation: 'TO UNDERSTAND WHO YOU ARE AND WHAT YOU WANT'
    },
    {
      name: 'purple',
      info: 'Your search for personal power is certainly no secret. You are reflective and thoughtful. Others see you as witty, clever, and full of pride, and they are right. You need to show off you stuff. You are strong willed. You know exactly what you want from others.',
      keyWords: 'DETERMINED, DRAMATIC, EMPOWERING',
      power: 'SEEING NEW POSSIBILITIES, IDEAS AND STRATEGIES',
      motivation: 'TO BECOME MORE SELF-POWERED'
    },
    {
      name: 'orange',
      info: 'You are dedicated to your job, hobbies, friends and family. Your realistic view of the world allows you to identify what is not important. You are a doer and understand that eggs need to be broken if you want an omelet. You have a sharp eye for spotting physical things that are not working. Also you can get things done without ruffling feathers.',
      keyWords: 'BOLD, SENTIMENTAL, DEDICATED',
      power: 'IMPLEMENTING CHANGE WITHOUT DISRUPTION',
      motivation: 'TO DISCOVER HOW THINGS ARE MADE'
    },
    {
      name: 'black',
      info: 'Your commitment to others provides you with a healthy perpective of yourself. You passionately extend yourself to others. When you get too close and they reject you, your feelings play back an emotional review of your life. Contemplating past emotional feeelings makes you feel secure and gives you the sense that you are on the right path. You take people and events too seriously. This makes it hard, sometimes impossible, for you to remain objective. You tend to shift the blame on someone or something else if things dont go your way.',
      keyWords: 'EMOTIONAL, FOCUSED, LOYAL',
      power: 'TO KNOW YOUR EMOTIONS',
      motivation: 'TO UNDERSTAND YOUR PAST'
    },
    {
      name: 'white',
      info: 'You give the gift of knowledge. Your suggestions make others slow down and consider all the options. Your objectivity gives you and others ability to consider things thoroughly. When you get what you wish, your hope is renewed. You bring optimistic agendas and problem-solving skills to situations. The world is yours for the taking if you can distinguish subtle differences between options. By logically analyzing things before taking action, you have the power to plot the future you want. ',
      keyWords: 'OBJECTIVE, CURIOUS, ANALYTICAL ',
      power: 'TO SEE NEW OPTIONS',
      motivation: 'TO CREATE A NEW FUTURE'
    },
    {
      name: 'brown',
      info: 'You prefer to live in the moment and appreciate the pleasures of life. You are inspired be the charms of the world. The more you experience your environment, the more you express yourself. Doing is exciting. Activity makes you feel more complete. You are constantly looking for new sensations to spice up your life',
      keyWords: 'AWARE, AUTHENTIC, COMPASSIONATE',
      power: 'TO UNDERSTAND REALITY',
      motivation: 'TO EXPERIENCE THE SENSATION OF LIFE'
    },
    function() {
      Color.find(function (err, colors) {
        if (err) { console.log(err); }
        else {
          console.log('Finished populating ' + colors.length + ' colors.');
        }
      });
    }
  );
});
