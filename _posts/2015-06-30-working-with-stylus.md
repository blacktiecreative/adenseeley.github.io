---
layout: post_page
title: Using Stylus a Comprehensive Guide
---
#Introduction
####What is a preprocessed language?
In the technical definition a preprocessed language is a language that is ran through some sort of preprocessor taking the code that you wrote that is not interpretable by the browser and turning it into raw CSS so the browser can read it.
####Whats in it for me?
I know that sounds like a lot of work right? Well not as much work as writing plain CSS, preprocessing languages have many shortcuts, many of which we will cover to make the code writing process much simpler and easier. The time that you take to set up the process will be gained back almost instantaneously. Don't believe me? Just humor me then and you will see what I mean.
####The Languages
I wrote this list in the order of difficulty for the language so if you are looking for a language will slightly less features then the one that we will be covering today, maybe I have written a diffrent toutorial just for you, however here are the languages listed in the order of difficulty in my oppinion of course.
######SASS
SASS standing for Syntatically Awesome Style Sheets, lives up to the name by far and is by far is my second favorite language to write in, if not tied with stylus for when I don't need as many features as stylus or I'm just writting up some simple code for something. Sass is a wonderful language to learn I highly recomend it and I'd say it's probobly the second most popular language only to it's "sister language" SCSS  
######SCSS
The most popular language by far, SCSS stands for Sassy CSS. And it is just that it's css with a hint of logic from SASS, when writing in SCSS you still have all of your mustache brackets and semi colons and regular colons that you get from css, the only advantage to writing in scss is that there is the logic from sass imbeded in it. Personally I avoid SCSS if I can just because I dont like writing the mustache brackets and semi colons if I dont have to, its an unneeded nussance for me, that being said in a language that removes these indentation is key, we will cover more about indentation later.
######LESS
LESS, well I have heard that it is similar to SASS and it is probobly the third most popular Language in the coding community, yet I have not had a chance to work with less much, therefore I dont really have an opinion on it.
######Stylus
Hey we made it, Stylus is by far my favorite language, it strips css back to just the content of the code itself and then adds massive amounts of logic, almost turning css into a javascripty language but not really, you will see the felxibility and the reasons that I love it so much soon dont worry. So why dont we dive in, after you kind sir.
#PreProcessing
If we are using a preprocessed language that is un interpretable by the browser, we need some way of getting it there, on the docs site for stylus they put this step under the executables section of the site, just if you wanted to know. Here are the ways that we can compile our code, in reverse order of the ways that I prefer
####A Pre Processing application
We are coders after all, arn't we? So we enjoy making things easier for each other, Coders are lazy lets face it. Despite this I think that pre processors are a good way to getting started using a pre processor because it takes out one more variable for you to control. Also another advantage to using a pre processor is that a pre processor I have found have the best error analysis and notification system out of all of the ways of processing, that way you know exactly what is wrong with your code while your writting it. My favorite pre processor is [CodeKit](https://incident57.com/codekit/) for Mac, it is paid but it's definatly worth the money if you arnt comfortable with the next few ways of compiling our code(they aren't that hard though I belive in you!). To quote the creators of CodeKit:
>It's like steroids for web developers.

this is true it is steroids for web developers, but we can do better with a terminal, despite this CodeKit definatly has a few feature that I would look for in any preprocessor before buying. firstly CodeKit supports an an auto refreshing feature when you save your code, this is incrediably helpful when writing, if you havent used some form of an auto refresher, you need to be, it will change your life. Another thing code kit does is have the ability to compile mutiple files at once, for an example you could have a set of jade, stylus and coffee script files all in one project and code kit will handle all of them for you neatly. Another benifit to code kit is that code kit will work with bower and manage all of your dependencides. But why do that when you can do all of that and more for free.
####The Terminal
Compiling stylus with the terminal couldn't be any easier, thus instead of talking about it for a paragraph, lets do it.

Firstly make sure you have node package manager(npm, but thats not what npm stands for for some reason, fun facts!) anyhow, if you havent installed it allready head over to [the node package manager website](https://nodejs.org/) and download it, and install it. Its a super simple process.

next we need to install the stylus npm package, if you'd like to check out the package [here](https://www.npmjs.com/package/stylus) is a link to the package on the npmjs website. If you dont care to read the docs, head over to your applications folder, then go into the utilities folder and open terminal, this is a lot of work though I prefer to just use the spotlight search `command + space` and open it.
firstly we are going to `cd` into the directory where we have our stylus files, for this series I've made a folder in my documents folder called stylus-toutorial, feel free to do the same and follow along.
```language-python
$ cd user/adenseeley/documents/
```
then ill make our directory where we will put our files
```language-python
$ mkdir stylus-toutorial
```
then we will go into that folder by using the cd command again
```language-python
$ cd stylus-toutorial
```
now I'll make a folder for us to put the stylus, css and images in
```language-python
$ mkidr stylus css images
```
now ill make us an index.html file, always good to have one of those kicking around.
```language-python
$ touch index.html
```
moving into our stylus directory lets make a few folders we will use a bit later and our main stylus file
```language-python
$ cd stylus
$ mkdir vendor partials pages helpers
$ touch main.styl
```
going back to our root of our project we are going to go into the css folder and put the same filename as our main stylus file but with a `.css` extention
```language-python
$ cd ..
$ cd css
$ touch main.css
```
okay now all of our project folders are structured they should look something like this.
    - stylus-toutorial
        - index.html
        - css
            - main.css
        - images
        - stylus
            - vendor
            - partials
            - pages
            - helpers
            - main.styl

Going back to the root of our project we are going to run the npm init command to allow us to install npm dependencies. lets go!
```language-python
$ cd ..
$ npm init
```
once you run npm init it is going to ask you a bunch of questions, just keep hitting the enter key until it says 'Is this ok?' hit enter again and you will be all set. Allright now we have a `package.json` file that will allow our dependencies to be managed for future proofing and allow the commands to function properly, now lets install the tools that will allow us to compile our stylus code.
```language-python
$ npm install stylus -g
```
running that command will install the proper packanges to our to support compiling our stylus file on our system, now you will be able to run the stylus command in any directory of your choice, allright lets drop our project directory onto our favorite text editor to get working!

firstly in our text edditor we are going to add some boilerplate code to our index.html file, here is the code that i've added to mine.
```language-html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Stylus Toutorial</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <header>
    <h1>Hello</h1>
    <nav>
      <ul>
        <li><a href="#">nav-item</a></li>
        <li><a href="#">nav-item</a></li>
        <li><a href="#">nav-item</a></li>
        <li><a href="#">nav-item</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam autem reprehenderit temporibus corporis, nesciunt enim obcaecati amet delectus architecto adipisci iste ab tempora commodi impedit nihil quod dolore at nam animi quaerat. Facere enim doloremque explicabo natus. Cupiditate, labore, autem. Hic, aut, iste. Aut temporibus quidem illo at, blanditiis in reprehenderit dicta suscipit libero reiciendis fuga nobis recusandae veniam exercitationem. Sequi nisi nostrum doloribus veniam suscipit nihil perspiciatis eum! Ut iure hic doloremque laudantium cum provident placeat accusantium suscipit id optio natus ad ex veritatis magnam minus nulla recusandae dolorem corporis ipsam aperiam asperiores, quo maiores. Quasi in accusamus pariatur culpa, numquam ullam sapiente similique quidem iusto eius ab blanditiis consequuntur illo maxime. Sit illo enim fuga hic veritatis molestias magnam maiores et laboriosam, inventore alias animi voluptatum quam culpa quos velit laborum a corrupti. Assumenda reiciendis officia tempora! Molestiae maxime commodi aut provident laudantium ex incidunt optio velit. Nihil error, ipsa ipsam fugiat corporis corrupti et maxime tempore. Non, temporibus expedita, omnis labore voluptas sit nostrum? Tempore debitis, explicabo perferendis maxime qui modi enim aspernatur illum natus cupiditate dicta illo sapiente ut, maiores reprehenderit esse quasi odio? Quod, nisi. Natus, veritatis illo. Quis corporis amet maiores accusamus ad!</p>
      </article>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam autem reprehenderit temporibus corporis, nesciunt enim obcaecati amet delectus architecto adipisci iste ab tempora commodi impedit nihil quod dolore at nam animi quaerat. Facere enim doloremque explicabo natus. Cupiditate, labore, autem. Hic, aut, iste. Aut temporibus quidem illo at, blanditiis in reprehenderit dicta suscipit libero reiciendis fuga nobis recusandae veniam exercitationem. Sequi nisi nostrum doloribus veniam suscipit nihil perspiciatis eum! Ut iure hic doloremque laudantium cum provident placeat accusantium suscipit id optio natus ad ex veritatis magnam minus nulla recusandae dolorem corporis ipsam aperiam asperiores, quo maiores. Quasi in accusamus pariatur culpa, numquam ullam sapiente similique quidem iusto eius ab blanditiis consequuntur illo maxime. Sit illo enim fuga hic veritatis molestias magnam maiores et laboriosam, inventore alias animi voluptatum quam culpa quos velit laborum a corrupti. Assumenda reiciendis officia tempora! Molestiae maxime commodi aut provident laudantium ex incidunt optio velit. Nihil error, ipsa ipsam fugiat corporis corrupti et maxime tempore. Non, temporibus expedita, omnis labore voluptas sit nostrum? Tempore debitis, explicabo perferendis maxime qui modi enim aspernatur illum natus cupiditate dicta illo sapiente ut, maiores reprehenderit esse quasi odio? Quod, nisi. Natus, veritatis illo. Quis corporis amet maiores accusamus ad!</p>
      </article>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quibusdam autem reprehenderit temporibus corporis, nesciunt enim obcaecati amet delectus architecto adipisci iste ab tempora commodi impedit nihil quod dolore at nam animi quaerat. Facere enim doloremque explicabo natus. Cupiditate, labore, autem. Hic, aut, iste. Aut temporibus quidem illo at, blanditiis in reprehenderit dicta suscipit libero reiciendis fuga nobis recusandae veniam exercitationem. Sequi nisi nostrum doloribus veniam suscipit nihil perspiciatis eum! Ut iure hic doloremque laudantium cum provident placeat accusantium suscipit id optio natus ad ex veritatis magnam minus nulla recusandae dolorem corporis ipsam aperiam asperiores, quo maiores. Quasi in accusamus pariatur culpa, numquam ullam sapiente similique quidem iusto eius ab blanditiis consequuntur illo maxime. Sit illo enim fuga hic veritatis molestias magnam maiores et laboriosam, inventore alias animi voluptatum quam culpa quos velit laborum a corrupti. Assumenda reiciendis officia tempora! Molestiae maxime commodi aut provident laudantium ex incidunt optio velit. Nihil error, ipsa ipsam fugiat corporis corrupti et maxime tempore. Non, temporibus expedita, omnis labore voluptas sit nostrum? Tempore debitis, explicabo perferendis maxime qui modi enim aspernatur illum natus cupiditate dicta illo sapiente ut, maiores reprehenderit esse quasi odio? Quod, nisi. Natus, veritatis illo. Quis corporis amet maiores accusamus ad!</p>
      </article>
    </section>
  </main>
</body>
</html>
```
Id like this toutorial to be a more real world example so ive come up with a simple layout that by the end of the toutorial will look and feel like a real website. note that I have included a linl to our main css file in the head of the html doccument, I also have up there a link to a `normalize.css` CDN so all of our styles will look nice.

heading back to the terminal in the stylus directory of our project your going to run the command: 
```language-python
$ stylus main.styl ../css.main.css
```

and  that will compile our stylus file once, thats no fun though right? we need it to keep compiling our files, so we are going to use one of the option commands that ships with stylus, specifically we will use the watch command. 
```language-python
$ stylus -w main.styl ../css.main.css
```
there is a whole list of stylus commands that ship with stylus, if you have the time id recomend reading them  over it will really help your workflow, here ais a link to the list, [stylus executable commands](https://learnboost.github.io/stylus/docs/executable.html)
