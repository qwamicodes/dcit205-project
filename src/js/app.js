//imports
import * as UICtrl from './views/UICtrl';
import * as controller from './models/controller';


//All event listners
//event listner to check the page height and parse the height value to the controller
window.addEventListener('scroll', () => {
    controller.checkPageYOffset(window.pageYOffset);
});
