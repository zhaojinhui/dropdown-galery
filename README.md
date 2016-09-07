# dropdown-galery
a small js plug-in enable user to slide down to the next picture

How to use it:

just down the file and then add the relative down.css, down.js and then use it with the following js and html code

''' javascript '''
var list = ['test.jpeg', 'test.jpeg', 'test.jpeg'];
$('.background-galery-container').downGalery(list);

'''

''' html '''
<div class="background-galery-container">
    </div>
    <div class="arrow-down-container">
      <div class="arrow-down">
        <img src="down.png">
      </div>
    </div>
'''
