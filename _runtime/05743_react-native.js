// === Module 5743: react-native ===

// Module 5743 (react-native)
import react_native from "react-native" /* 17 */;

let closure_1;

let _window;
let map;
({ Image: _window, processColor: map } = react_native);
function prepareMenu(arg0, arg1, arg2) {

}

export const prepareHeaderBarButtonItems = (headerLeftBarButtonItems, left) => {
  let closure_0 = left;
  let mapped;
  if (headerLeftBarButtonItems != null) {
    mapped = headerLeftBarButtonItems.map((type, index) => {
      let _window;
      let backgroundColor;
      let color;
      let items;
      let name;
      let name1;
      let obj3;
      const f90867 = (icon, index) => {
        let assetSource;
        let assetSource1;
        let items;
        let obj;
        let str;
        if (c2) {
          str = concat(tmp, ".", index);
        } else {
          str = concat(index);
        }
        icon = icon.icon;
        let type;
        if (icon != null) {
          type = icon.type;
        }
        if ("sfSymbol" === type) {
          const icon2 = icon.icon;
          let name;
          if (icon2 != null) {
            name = icon2.name;
          }
        }
        if ("xcasset" === type) {
          const icon3 = icon.icon;
          let name1;
          if (icon3 != null) {
            name1 = icon3.name;
          }
        }
        const icon4 = icon.icon;
        let type1;
        if (icon4 != null) {
          type1 = icon4.type;
        }
        if ("imageSource" === type1) {
          assetSource = left.resolveAssetSource(icon.icon.imageSource);
        } else {
          const icon5 = icon.icon;
          let type2;
          if (icon5 != null) {
            type2 = icon5.type;
          }
          if ("templateSource" === type2) {
            assetSource1 = left.resolveAssetSource(icon.icon.templateSource);
          }
        }
        if ("submenu" === icon.type) {
          const obj2 = { sfSymbolName: tmp3, xcassetName: tmp5, imageSource: assetSource, templateSource: assetSource1 };
          const merged = Object.assign(icon);
          if (typeof closure_2_2 === "function") {
            closure_1 = tmp23;
            if (str === undefined) {
              str = "";
            }
            const obj3 = { items: items.map(f90867) };
            const merged1 = Object.assign(icon);
            items = icon.items;
            const merged2 = Object.assign(obj3);
            obj = obj2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          obj = { sfSymbolName: tmp3, xcassetName: tmp5, imageSource: assetSource, templateSource: assetSource1, menuId: "" + str + "-" + closure_0 + "-" + closure_1 };
          const merged3 = Object.assign(icon);
          const _HermesInternal = HermesInternal;
        }
        return obj;
      };
      if ("spacing" === type.type) {
        return type;
      } else {
        let assetSource;
        let assetSource1;
        let tmp38;
        let icon4 = type.icon;
        type = undefined;
        if (icon4 != null) {
          type = icon4.type;
        }
        let str = "imageSource";
        if ("imageSource" === type) {
          assetSource = React.resolveAssetSource(type.icon.imageSource);
        } else {
          let icon = type.icon;
          let type1;
          if (icon != null) {
            type1 = icon.type;
          }
          if ("templateSource" === type1) {
            assetSource1 = React.resolveAssetSource(type.icon.templateSource);
          }
        }
        let tmp7;
        if (type.titleStyle) {
          let obj = { color: tmp34(type.titleStyle.color) };
          let merged = Object.assign(type.titleStyle);
          tmp7 = obj;
        }
        let tmp11;
        if (type.tintColor) {
          tmp11 = tmp34(type.tintColor);
        }
        let tmp13;
        if (type.badge) {
          let obj2 = { style: obj3 };
          let merged1 = Object.assign(type.badge);
          obj3 = { color: tmp34(color), backgroundColor: tmp34(backgroundColor) };
          let merged2 = Object.assign(type.badge.style);
          const style = type.badge.style;
          color = undefined;
          if (style != null) {
            color = style.color;
          }
          const style2 = type.badge.style;
          backgroundColor = undefined;
          if (style2 != null) {
            backgroundColor = style2.backgroundColor;
          }
          tmp13 = obj2;
        }
        const obj4 = { imageSource: assetSource, templateSource: assetSource1, sfSymbolName: name, xcassetName: name1, titleStyle: tmp7, tintColor: tmp11, badge: tmp13 };
        const tmp23 = type;
        let merged3 = Object.assign(type);
        let icon2 = type.icon;
        let type2;
        if (icon2 != null) {
          type2 = icon2.type;
        }
        name = undefined;
        if ("sfSymbol" === type2) {
          name = type.icon.name;
        }
        let icon3 = type.icon;
        let type3;
        if (icon3 != null) {
          type3 = icon3.type;
        }
        name1 = undefined;
        if ("xcasset" === type3) {
          name1 = type.icon.name;
        }
        if ("button" === type.type) {
          const obj5 = { buttonId: "" + index + "-" + _window };
          const merged4 = Object.assign(obj4);
          let _HermesInternal = HermesInternal;
          tmp38 = obj5;
        } else {
          tmp38 = null;
          if ("menu" === type.type) {
            const obj6 = {};
            const merged5 = Object.assign(obj4);
            const menu = type.menu;
            if (typeof prepareMenu === "function") {
              _window = index;
              let c2 = "";
              const obj7 = { items: items.map(f90867) };
              const merged6 = Object.assign(menu);
              items = menu.items;
              obj6.menu = obj7;
              tmp38 = obj6;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        return tmp38;
      }
    });
  }
  return mapped;
};