// _runtime/09689_getTheme.js
import noopDefault from "00019_noop.js";
import colorToHex from "09694_colorToHex.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";
import { DatePickerAndroid } from "09690_getStyle.js";

require = arg1;
({ Appearance: obj1, Platform, Text } = get_ActivityIndicator);
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

export default noopDefault.memo((theme) => {
  const obj = {};
  const merged = Object.assign(theme);
  if (typeof getTextColor !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof getTheme !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (theme.theme) {
    let str = theme.theme;
  } else {
    str = "auto";
    if (closure_2) {
      const colorScheme = obj3.getColorScheme();
      let tmp9;
      if (null !== colorScheme) {
        tmp9 = colorScheme;
      }
      str = tmp9;
    }
    obj3 = closure_2;
  }
  let str2 = "white";
  let str3 = "white";
  if ("dark" !== str) {
    let str5;
    if ("light" === str) {
      str5 = "black";
    }
    str3 = str5;
  }
  obj.textColor = colorToHex.colorToHex(str3);
  let tmp4Result = tmp4(9694);
  if (typeof getDividerColor !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (theme.dividerColor) {
    let dividerColor = theme.dividerColor;
  } else {
    if (typeof tmp6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (theme.theme) {
      let str6 = theme.theme;
    } else {
      str6 = "auto";
      if (closure_2) {
        const colorScheme1 = obj5.getColorScheme();
        let tmp12;
        if (null !== colorScheme1) {
          tmp12 = colorScheme1;
        }
        str6 = tmp12;
      }
      obj5 = closure_2;
    }
    dividerColor = str2;
    if ("dark" !== str6) {
      let str8;
      if ("light" === str6) {
        str8 = "black";
      }
      dividerColor = str8;
    }
  }
  obj.dividerColor = tmp4Result.colorToHex(dividerColor);
  tmp4Result = tmp4(9694);
  if (typeof getButtonColor !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (theme.buttonColor) {
    str2 = theme.buttonColor;
  } else {
    if (typeof tmp6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (theme.theme) {
      let str9 = theme.theme;
    } else {
      str9 = "auto";
      if (closure_2) {
        const colorScheme2 = obj7.getColorScheme();
        let tmp15;
        if (null !== colorScheme2) {
          tmp15 = colorScheme2;
        }
        str9 = tmp15;
      }
      obj7 = closure_2;
    }
    if ("dark" !== str9) {
      let str11;
      if ("light" === str9) {
        str11 = "black";
      }
      str2 = str11;
    }
  }
  obj.buttonColor = tmp4Result.colorToHex(str2);
  if (typeof getTheme !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (theme.theme) {
    let str12 = theme.theme;
  } else {
    str12 = "auto";
    if (closure_2) {
      const colorScheme3 = obj8.getColorScheme();
      let tmp18;
      if (null !== colorScheme3) {
        tmp18 = colorScheme3;
      }
      str12 = tmp18;
    }
    obj8 = closure_2;
  }
  obj.theme = str12;
  if (typeof getTitle !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let title = theme.title;
  let str13 = "";
  let str14 = "";
  if (null !== title) {
    if (!title) {
      let str15 = "Select date";
      if ("time" === tmp19) {
        str15 = "Select time";
      }
      title = str15;
    }
    str14 = title;
  }
  obj.title = str14;
  let str17 = "Confirm";
  if (theme.confirmText) {
    str17 = theme.confirmText;
  }
  obj.confirmText = str17;
  let str18 = "Cancel";
  if (theme.cancelText) {
    str18 = theme.cancelText;
  }
  obj.cancelText = str18;
  let num = 1;
  if (theme.minuteInterval) {
    num = theme.minuteInterval;
  }
  obj.minuteInterval = num;
  let str19 = "datetime";
  if (theme.mode) {
    str19 = theme.mode;
  }
  obj.mode = str19;
  if (null != theme.timeZoneOffsetInMinutes) {
    str13 = theme.timeZoneOffsetInMinutes.toString();
    const str20 = theme.timeZoneOffsetInMinutes;
  }
  obj.timeZoneOffsetInMinutes = str13;
  return <DatePickerAndroid />;
});