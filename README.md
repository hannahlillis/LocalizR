# LocalizR

<img align="right" src="https://s18.postimg.cc/tdute22rt/Screen_Shot_2018-04-16_at_12.43.59.png" width="450"/>

For our final project at Makers Academy, we built an application using the MERN stack, which allows the user to play language-learning quizzes. The quizzes are designed to replicate simple scenarios which the user may find themselves in during their travels (e.g. ordering in a restaurant)


__Built by__:
- Joshua Holloway
- Hannah Lillis
- Jenny Arenas Marin
- Kaari Strack
- Magyar-Hunor Tamas


Approach
-----

__Building the product__  

After agreeing on our project idea (a language-learning web app), we came up with our MVP as a group, and set ourselves a deadline for reaching it. We created wireframes of our basic page layouts, to make sure everyone was aligned on what we wanted it to look like. We then used TDD to drive our MVP.  

After we had our MVP, we prioritised the other features we wanted to include and started implementing them. Unfortunately, due to the time constraints of the project, we were unable to completely follow TDD and still implement the features we agreed were necessary. We therefore came to the decision as a group that we would rather implement the must-have features, but sadly this meant forgoing some testing.

__Teamwork__  

We held twice-daily stand-ups, in the morning and the afternoon, where we'd align on the day's tasks and bring up any issues we'd encountered. We also held regular knowledge transfers to ensure all members of the team had a good understanding of our codebase. This was especially important as we decided to divide the work so I would focus mainly on back-end, Josh mainly on React, and the others would cycle between us. This meant we always had an 'expert' in each section when we were pairing. We tried to pair as much as possible, rotating the pairs frequently, and making sure everyone worked on the parts they wanted to when possible. 

__What I'd do differently__  

If I were to start the project again, I would do the following:

*Simplify our functionality* : Our original idea for the whole project required users to login so we could keep a record of their activity, then show a leaderboard/tell them when they'd beaten their high score etc. We therefore included logging in/out as a must-have feature. However, as the app is now, there is no real need for the user to login, so I believe we should've focused on building the app without this feature until it became necessary to have an authenticated user.

*Fully test-drive the product* : As mentioned above, we wanted to follow TDD as strictly as possible, but due to time constraints, we made a group decision to forgo TDD and prioritise building the must-have features. If I were to begin again,  I would ensure we used TDD the entire way through, as this would've probably helped us when fixing bugs etc. so may not have actually taken us that much extra time in the long run, and we could be more confident that our code does exactly as intended.


Tech Stack
-----

<img src="https://image.ibb.co/czRdzx/la_reactnpm.png" width="100" alight="left"/>

__Front End__:
- React
- CSS (styled components)

__Back End__:
- Node.js
- Express.js
- Mongodb
- Mongoose

__TDD__:
- Jest
- Enzyme
- Cypress


How to use
---------

Open the Terminal (or iTerm) by pressing ⌘ and spacebar.

<img src="https://image.ibb.co/dXVJXH/la_terminal.png" alt="commandspacebar" width="400" align="right"/>

Click [HERE](https://nodejs.org/en/) to download and install node.js if you do not have it.

Verify your installation by typing:
```
$ node -v
```
Clone this repo onto your computer:
```
$ git clone *copy & paste https or SSH link here*
```
Install the required dependencies:
```
$ npm install
```
Run the server, and begin!
```
$ npm run start-dev
```

User Stories
--------

__Minimum Viable Product__:
```
As someone who travels often 
So I can learn useful phrases 
I want to be able to practice a language
```
__Version 2 Features__

```
As a user
So I can decide what to practice 
I want to be able to select a language and scenario
```
```
As a user 
So I can test my knowledge 
I want to be able to choose an answer to a question
```
```
As a user 
So I can test my knowledge 
I want to be able to choose an answer to a question
```
```
As a user 
So I can see how well I did 
I want to be able to see my score
```

__Version 3 Features__
```
As a user 
So I can access the quizzes
I want to be able to log in or sign up
```
```
As a user 
So I can end my session and keep my account secure
I want to be able to log out
```
```
As a user 
So I am motivated to continue practicing 
I want to be able to read a comment on how well I did
```
```
As a user 
So I can get an extra challenge 
I want to be able to click a button to randomly choose a quiz for me
```
```
As a user
So I can recap my answers
I want to see a breakdown of what I chose for each question
```

Future Additions
-------

Due to the time constraints of the project, we had to prioritise the features we wanted to add. These user stories are for features we will look to add in the future:

```
As a user 
So I can improve my pronunciation 
I want to be able to hear example audio
```
```
As a user
So I can satisfy my competitiveness
I want to see a leaderboard
```
```
As a user 
So I can follow my story 
I want to see the outcome of my chosen answer
```

We will also look to refactor our code by:
- extracting the questions and answers into a database 
- ensuring all our methods follow the Single Responsibility Principle
- DRYing up our code

## Screenshots of use!

<img align="centre" src="https://s18.postimg.cc/ycibsleah/Screen_Shot_2018-04-16_at_12.44.19.png" width="450"/>
<img align="centre" src="https://s18.postimg.cc/d2uphqik9/Screen_Shot_2018-04-16_at_12.44.37.png" width="450"/>
