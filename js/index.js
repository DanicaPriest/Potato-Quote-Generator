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
"https://lh3.googleusercontent.com/NmwTI5C93caMm7o2yz3ucOVNv-w54Kv7Q6iu5aOpYzwSuDgDZcvooAk6Amxh8Kq0I6N4w4jo8RqzQA56Q6f9l9WVxZRlPHY2T07hG_lz6qCxa_EmLKF7lG-584YVrQ4ZLkYwGeNhTF5qXtkU9-aBeBEYsyQeFsDWpRjnBWdBkMy9pFffrHYo63WOWKHpP1KMzWPTh9kjGhUI6uAGqEdw1LjIY2YjLO52C6g-0V8shWBN7iXneoO-whq4wkcv1_Iu2hQcLJHxaMHGPoXO4A7eQEpJKt9mahzer0AGWGjCecVw6__zn0frBSXmvUf-hmGCaK4_UwrQElXzKx2N58LnMBV1_zkF9I75pVO3LMxq4kFnC5wTTWS0yFNG-smwcDnwIRToMZkOzKHozy51PZGikD_qR4yC2-l9JNpqGWogP7hMXqqvKp5sHBPZcB6jqFI0a-BvAHpCQIJgsj1A_s-As-_qoC7cqk9bqk7PkFzfqTJscDh4g7l-nHwvyqWSeYaLkghs4gQ4T-C_cTF3KYKoH4ntjfSS8sSZByD8HTNePA590QZfkDhJ79UuaiHTwA3b9E2443CHvD63M19Z9_yqmeAz2u5yIqb_bqlq85wZRX5EBijcs-RJu18CjN-TBlcsi1a9FwJsE9S7m0pVlXe0yKbc17zveGgX=w540-h701-no",
               "https://lh3.googleusercontent.com/Jqgy8fWu7fIyYtYl6OrHcltfOWYvtu37joFsU_CF9PEg__75hG3NCy4co_0GGY6sAJtIXd3rzXffBKfKAuNaPi9y2oGsWLc8AS864K3PiqT98MLvmjo2qjaJk4hxaTvbGM7mKt3bTv7lQa3biMTkFexW3OpY6xwO9GaOjHsLzQbLdrZtFBryrBlCDGCveGRa5O6gvQ-OBgvOHULPCU1fVNPitT0E72XX00eBdZMgUXav0HCkS0kuysPJytObd5cUzMeL_kLc5P2gPWE9hLpgij0b6AepDG8-mKn5IQw03Ek-HcvPhGYdrFnEFlXhR2M-SZUR-D8zwkJ-ks9tUp-rmNpuUQYPLUETZG9dVYbBUkSlwjfUHaiOyyu6uAfDH_EYz_KahGaC4lBg-HiFPPsslyesuo1vvkjGgCsDvObthUnw_lhCAf82sKcrOykzKznetpSFM1-SfU0RocaDLKht2BsRbGqPiCfJC9wKsVmqVARTe5ts9aj-zP6XwSblIC17S1lghN4JsRjj8mrXDbzq7Pg8kLFjg1Zez9tErOJizYrtEh9Mm_CSbjeXcd_g2lQJEf39fHzUZRpQjeVn5PFkzmo1WyfHfzvOFkova7ZRxqHTOIJ-MxsGqo50jLYqIiDj59YCE7RGMIgE1Alei5lczAYgDLu90oDd=w454-h346-no",
               
"https://lh3.googleusercontent.com/7edQiCOeV9pbUR8Y87GAOVrnL2j8ZoQvLUwGYtQcTbSCTMuCnPgzH0nSnV_-fxE895uFb_QcfBVLySNC8fiyhLXw8T6hF0dwxbUqYj_UhqF4jpA2kfXrS2XZK7rbn5zxxxcorOJIo8jAjIHiyMu31TAqY7TsLj5Dba2_hSz6ZYBP3TVKFrrPf6xpbfpJ1jfyLs0EqUWDbFXHWiEqIICLU1m_lZg8O9BEA-aVpzKbPZPgWoBq2jqM_tr1LbCx8Kjh8zdt17TNQSY7buJcfPA8BuMnbE1yftDb_4wNa6Q4RysyVWmvwZrB9cLextuvK4_DsOlZL-MFpzhWMFeO-9Fi5sj7dPsEh7crapltE6DvFnxooq9P4WQ76ae2PFvtYMu8nuC_QieBh8ATva8Rp_CCgq6qa9v3rhNhZs6DNeAQK9ub6yHQ_xzsk7UQBxlVRlpCghe4D9beEWzhpXESaKGAsfArC3YyVHyz_MgmbE1nCe__9UL-RWIxv--mQETFSZEKVaMh_jvDhXUjg_THJ-ngeKL0N-FRl4CyqMLIPRFCFn6J1m_wtJ40aXqSJdUzorK0uHI0DB6od6lgM0AkV53s63ZscQQt5KzPRbzRFziELp7T4HKs6yGREfqvEHy6rutth4gLuJwF-Oo7QxmfbxpmL6xcPLuWINA-=w470-h299-no",
"https://lh3.googleusercontent.com/zVrPmNg82ngtUYqojw5r5j_Ot7MhT_NVCJkdls-Ajcc9oPHFZZyIIozP5Fda6eM6-5WwPJL8JtmsFAaSDN47HNTDp5V7WAItSx6-QE60t08OJ7uxGI8uIB7aYTnA0R2UdeCjzCWn5qB4K4TUJBJkPCPvpvTTyxjCrBDHA7sAkDxzZwh1NTOEX9DBs8x-x0x-hT-acBcRnTB-8tE_-gshqUNUbx3g2riPJEWV801fRcowkDQwxX28r5ZBcZRbzS3z8rkJkrhwEU3huG7ojtfdU3XsguBIWUXEB47pvd1GZujBuS5fFu9G14nJaWwO67fCRTzwA8Bp6zHY33TvYRclQ06kTnXmMqz_74klfQX1TBeGil-FoYcdrdgiTHnT5jL9hSQVKJvKkHerwKU5VQc5U-UoQcuZhJkPHqdBiICZBNP6gZkFyPyG63iyXHtMbmR1OeTpBYXAfzOYV8h6UgELYR_1jBBXh3B2F0NtxyrxnIfZEnn7kSnBN7I6Eo6_vDyFZ3bmE7KJqlnliBwNpMsEBMN2Mw-3_idjENAM99q2Cz5E53bhywAI4KZUYkW3JeWQbxuKld2rvCPlg2XFgOWxVQBOxD603mlT9pW0jhJpIPfquNFb-VDbXEu7twmFhOYD62kvMR_vw3wtNuJsMMV2W7tSFzj_ardf=w518-h291-no",
"https://lh3.googleusercontent.com/p7sdkVXb4GpTeaLbW_Yo6v2Zpc_H-rgt0e9LU2jNy6YuyNYRTgjeARs_iYMUlAdGhjABcnMMQPbDNydOEYWW0VjhFbjF5bsB3kQsOnaiOQSO3PHB9MxSUkPLRxoRWWd9mp6RzzAL6NomBpx7sSQxSxmt5t9KTtZzQLyFJTUn75chK5NH8d_UGBlTJmoNixzL1Q92-lQtUf4lRpciywv-0CSjEyIrdwhyHjGHn6ISqepBKLEQGFErqA1m7Z4uNqu-6YCA6ex1AnGEXDG2jG1w7Kpl8dpl0Pc5Gt_rSWeD1VGSXvyJ9Uv0tfSM0MUDK_Qfn9U2GniHvVoyXlTrx_Zc-SctjSLwRXWmNiwFYw_Zun5AadF5sOxb7ge72NPIVOJGOE_WTPRiJHorbLqM0b5gKuaG0CCdIlXpQMOnm0sx2UG_yvUwNJ_F5TIu25Ny7FRFJ5InPLZHkxSaj6Ar5G1dgqzwyGXf9wTZU6JGVdAzfOAUX0Jvin7yj0Xt2Afj4X4VRNsG3yPaes9ZcpUylodHHRH0YWzc_1qp-gRQ0iguPF3SwJGkLg-fAdlxJ3kbTkCBjDp9pfCKlrt5dr7e7N1RI5kS8vM4gw8xmbfLz-Y0clKD0zuht8xDWo3cX5LTqkh4491YBnrukRiJuEx8eqhkgNiupirs4a6k=w441-h247-no",
"https://lh3.googleusercontent.com/5c8WgjRlBbIYI3KF6xihk-BuJM0JlDRBGno4PcPj-ZBK_UP0XO8-jtgcIvvrTCZ27hrK_e7Q6nnHds3MDX47PvmCqeW0PuU3oluiKBPjLOrg6qI_neN4P2p_FU4z2SNmjJk7M9r200wwLQ-L3dEBtkFO0JjN2-awOfeqgPbHX5sIdGBiGC3MEzxbudXHc__5r5OsXsHF_mFkgg-Kx3VXL_A_L_gp_cK7QjfRIVErk5QNfLBpUWqGhBQ5TwDrNQ4p_Qix8G1YxJGZlB4F__UR1K7bVIX-idQvXhbOqChHv2fCZpecyfBnowhiWtbow2LUD_R5IkzKpGKiPVryrsFd0oKhjGX6hjksntEmG1Jb0kJYHmsD8TMJW5q5TEnij1nPP02P-ABGwIctHZSR8eoDjJZchrjFeFMEHEmuCIWEud1m_suslxdAwXz639HA6_sXYd0i0m5eUcRkXw7Xbls9BLaeYIP-b72ZAflb429tKkhRnsurBfMVUZ_g3iBSwJoPsEQHA9fYGfcUhDkW9VujizK8vjCbdVBodmC-C48942P7FJRX0Pqp_LF51eusAQex5aC_tCpO-mVNhIqOr_6-MqzZupsUaAH_DJ81Sx-voAXZyXXbFrcX_FKI-jjZG_-obIn280tladY01LnkC7CW2f9VqEknUuBJ=w450-h300-no",
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
