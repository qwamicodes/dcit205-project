import * as UICtrl from "../views/UICtrl";

export const checkPageYOffset = (height) => {
  height >= 50
    ? UICtrl.changeNavBg("white")
    : UICtrl.changeNavBg("transparent");
};
