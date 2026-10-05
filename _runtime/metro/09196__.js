// === Module 9196: ? ===

// Module 9196
import Fragment from "Fragment" /* 21 */;
import DatePickerAndroid2 from "DatePickerAndroid" /* 9197 */;
import _slicedToArray from "_slicedToArray" /* 9201 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Platform;
let Text;
let c2;
({ Appearance: c2, Platform, Text } = react_native);
const jsx = Fragment.jsx;
const DatePickerAndroid = DatePickerAndroid2.DatePickerAndroid;
function getTheme(arg0) {

}
function getDividerColor(arg0) {

}
function getTextColor(arg0) {

}
function getButtonColor(arg0) {

}
function getTitle(arg0) {

}

export default react.memo((theme) => {
  const obj = {};
  const merged = Object.assign(theme);
  _slicedToArray;
  if (typeof getTextColor === "function") {
    if (typeof getTheme === "function") {
      let str;
      if (theme.theme) {
        str = theme.theme;
      } else {
        str = "auto";
        if (React2) {
          const colorScheme = React2.getColorScheme();
          let tmp11;
          if (null !== colorScheme) {
            tmp11 = colorScheme;
          }
          str = tmp11;
        }
      }
      let str2 = "white";
      let str4 = "white";
      if ("dark" !== str) {
        let str6;
        if ("light" === str) {
          str6 = "black";
        }
        str4 = str6;
      }
      obj.textColor = tmp7(str4);
      _slicedToArray;
      if (typeof getDividerColor === "function") {
        let dividerColor;
        if (theme.dividerColor) {
          dividerColor = theme.dividerColor;
        } else if (typeof getTheme === "function") {
          let str7;
          if (theme.theme) {
            str7 = theme.theme;
          } else {
            str7 = "auto";
            if (React2) {
              const colorScheme1 = React2.getColorScheme();
              let tmp17;
              if (null !== colorScheme1) {
                tmp17 = colorScheme1;
              }
              str7 = tmp17;
            }
          }
          dividerColor = str2;
          if ("dark" !== str7) {
            let str9;
            if ("light" === str7) {
              str9 = "black";
            }
            dividerColor = str9;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        obj.dividerColor = tmp13(dividerColor);
        _slicedToArray;
        if (typeof getButtonColor === "function") {
          if (theme.buttonColor) {
            str2 = theme.buttonColor;
          } else if (typeof getTheme === "function") {
            let str10;
            if (theme.theme) {
              str10 = theme.theme;
            } else {
              str10 = "auto";
              if (React2) {
                const colorScheme2 = React2.getColorScheme();
                let tmp23;
                if (null !== colorScheme2) {
                  tmp23 = colorScheme2;
                }
                str10 = tmp23;
              }
            }
            if ("dark" !== str10) {
              let str12;
              if ("light" === str10) {
                str12 = "black";
              }
              str2 = str12;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          obj.buttonColor = tmp19(str2);
          if (typeof getTheme === "function") {
            let str13;
            if (theme.theme) {
              str13 = theme.theme;
            } else {
              str13 = "auto";
              if (React2) {
                const colorScheme3 = React2.getColorScheme();
                let tmp26;
                if (null !== colorScheme3) {
                  tmp26 = colorScheme3;
                }
                str13 = tmp26;
              }
            }
            obj.theme = str13;
            if (typeof getTitle === "function") {
              let title = theme.title;
              let str14 = "";
              let str15 = "";
              if (null !== title) {
                if (!title) {
                  let str16 = "Select date";
                  if ("time" === tmp28) {
                    str16 = "Select time";
                  }
                  title = str16;
                }
                str15 = title;
              }
              obj.title = str15;
              let str18 = "Confirm";
              if (theme.confirmText) {
                str18 = theme.confirmText;
              }
              obj.confirmText = str18;
              let str19 = "Cancel";
              if (theme.cancelText) {
                str19 = theme.cancelText;
              }
              obj.cancelText = str19;
              let num = 1;
              if (theme.minuteInterval) {
                num = theme.minuteInterval;
              }
              obj.minuteInterval = num;
              let str20 = "datetime";
              if (theme.mode) {
                str20 = theme.mode;
              }
              obj.mode = str20;
              if (null != theme.timeZoneOffsetInMinutes) {
                const str21 = theme.timeZoneOffsetInMinutes;
                str14 = str21.toString();
              }
              obj.timeZoneOffsetInMinutes = str14;
              return <DatePickerAndroid {...obj} />;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});