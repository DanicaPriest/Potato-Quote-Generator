var prevNumb = 0;
var prevNum = 0;
function changeQ(){
  var quoteArr = [
    "blank", "What I say is that, if a fellow really likes potatoes, he must be a pretty decent sort of fellow.</blockquote> -A. A. Milne",
  "Money is the root of all evil, and yet it is such a useful root that we cannot get on without it any more than we can without potatoes.</blockquote> -Louisa May Alcott",
    "Every single diet I ever fell off of was because of potatoes and gravy of some sort. </blockquote> -Dolly Parton",
    "It is a mistake to think you can solve any major problems just with potatoes.</blockquote> -Douglas Adams",
    "Papa, potatoes, poultry, prunes and prism, are all very good words for the lips.</blockquote> -Charles Dickens",
    "Meat is a big deal in my life. I do love breakfast food, but I don't think that's extraordinary. I'm a normal American. We love eggs and meat and potatoes and gravy.</blockquote> -Nick Offerman",
    "I like French fries, I like mashed. I love potatoes.</blockquote> -Mary J. Blige",
    "I have these big piano-playing hands. I feel like I should be picking potatoes. </blockquote> -Sandra Bullock",
    "I'm not Ted Nugent. My house is run, essentially, by an adopted, fully clawed cat with a mean nature. I would never hunt. I would never wear fur. I would never go to a bullfight. I'm not really a meat and potatoes guy.</blockquote> -Anthony Bourdain",
    "A 10-pound sack of potatoes lasts a long time.</blockquote> -Octavia E. Butler",
    "To fulfill a dream, to be allowed to sweat over lonely labor, to be given a chance to create, is the meat and potatoes of life. The money is the gravy.</blockquote> -Bette Davis",
    "Nothing like mashed potatoes when you're feeling blue. Nothing like getting into bed with a bowl of hot mashed potatoes already loaded with butter, and methodically adding a thin, cold slice of butter to every forkful.</blockquote> -Nora Ephron",
    "I try to work out my mind more these days. I try to eat right. I don't drink, I don't smoke, and I take the skin off chicken. But I'm not on no special diet. I like my steak and potatoes, ice cream, doughnuts.</blockquote> -Mr. T", "There's a science to ordering potatoes. Are they skinny shoestring or big, fat steak fries? You just have to let your taste buds guide you when deciding what to eat.</blockquote> -Gayle King"
];
 var randomNumb = Math.floor((Math.random() *( quoteArr.length -1)) +1);
  if (prevNumb == randomNumb){if (prevNumb ==  (quoteArr.length -1)){randomNumb = (prevNumb -1)} else {randomNumb = (prevNumb + 1)}} { document.getElementById("quoteArea").innerHTML = "<blockquote class='text-center' > " + quoteArr[randomNumb];
  prevNumb = randomNumb;
  }
tweetQ()
}
  

function changeBG(){
  
 var imgArr = ["blank",
"https://static1.squarespace.com/static/558a2423e4b062927074f8f4/t/55a38f34e4b002de259d6124/1436782394992/rainbow-background-4.jpg?format=1500w",
               "https://s-media-cache-ak0.pinimg.com/originals/84/bb/1b/84bb1b386075631db089ee413a75e239.gif",
"http://i512.photobucket.com/albums/t326/marichelo67/Bunnies.gif",
"http://more-sky.com/data/out/9/IMG_340922.png",
"https://secure.static.tumblr.com/48fc2d6ac28e8e579cd41cd798a4b244/jbhua0h/pSlo1tl7x/tumblr_static_tumblr_static_clqkkx14wigccs844kw8oswss_640.gif",
"http://us.123rf.com/450wm/maxoidos/maxoidos1505/maxoidos150500047/40202246-beautiful-abstract-sparkles-glitter-background-glittering-sequins-on-the-wall.jpg?ver=6",
"http://data.whicdn.com/images/133129290/large.jpg",
"http://wallpapercave.com/wp/7B8rwox.jpg",
"http://www.walldevil.com/wallpapers/a76/glitter-green-dark-red-wallpaper-image.jpg",
"https://image.freepik.com/free-vector/silver-glitter-background_1048-222.jpg",
"http://s1.picswalls.com/wallpapers/2014/08/16/glitter-wallpaper_072436602_203.jpg",
"http://wallpapercave.com/wp/wla90JY.jpg",
"https://i.ytimg.com/vi/V_t5Li2Lj7k/maxresdefault.jpg",
"http://wallpapercave.com/wp/gQtsOWf.jpg",
"https://lh3.googleusercontent.com/bksKxwbW5ycqVBOzMMtfKwDCIzVrrUaPtKM83n67wB-DGf0NS4ceSCEQTTDEUFIfLg=h900",
"http://bgfons.com/upload/flowers_texture718.jpg",
"http://images.fineartamerica.com/images-medium-large/real-first-european-springs-flowers-background-aleksandr-volkov.jpg",
"https://s-media-cache-ak0.pinimg.com/originals/c2/b6/3a/c2b63aa7ce4d43ae4dbe3ea870247ded.jpg",
 "https://s-media-cache-ak0.pinimg.com/originals/11/3e/1e/113e1e07af5de3b7cf67c5eef6ea3a3d.jpg",              "http://wallpapercave.com/wp/ildJ2CY.jpg", "http://newtopwallpapers.com/wp-content/uploads/2013/04/Beautiful-Desktop-Rainbow-Background.jpg","http://www.wallpaperscharlie.com/wp-content/uploads/2016/10/Rainbow-Colors-Background-Wallpaper-6.jpg","https://i.ytimg.com/vi/sYSl2FWSHsA/maxresdefault.jpg",
              "http://newtopwallpapers.com/wp-content/uploads/2013/04/Beautiful-Rainbow-Art.jpeg",
              "http://jodahome.com/wp-content/uploads/2015/07/jungle-cartoon-picture.jpg",
              "http://unitedwedream.org/wp-content/uploads/2015/12/200.gif"]
  var randomNum = Math.floor((Math.random() *( imgArr.length -1)) +1); 
if (prevNum == randomNum){if (prevNum ==  (imgArr.length -1)){randomNum = (prevNum -1)} else {randomNum = (prevNum + 1)}} { document.body.style.backgroundImage = "url(" + imgArr[randomNum] + ")";
prevNum = randomNum;
console.log(randomNum);}
  
}
function tweetQ(){
 var qText = document.getElementById("quoteArea").textContent;
  document.getElementById("tweetText").href= "http://twitter.com/home/?status=" + qText;
  
  
}
function potatoD(){
  document.getElementById("potato").style.display= "inline-block";
  setTimeout(noPotato,2100);
  
}
function noPotato(){
  document.getElementById("potato").style.display= "none";
  
}