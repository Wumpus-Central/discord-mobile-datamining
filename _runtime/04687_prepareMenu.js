// _runtime/04687_prepareMenu.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

({ Image: c0, processColor: closure_1 } = get_ActivityIndicator);
function prepareMenu(arg0, arg1, arg2) {

}

export const prepareHeaderBarButtonItems = (headerLeftBarButtonItems, left) => {
  closure_0 = left;
  let mapped;
  if (headerLeftBarButtonItems != null) {
    mapped = headerLeftBarButtonItems.map((item, index) => {
      if ("spacing" === item.type) {
        return item;
      } else {
        let icon4 = item.icon;
        let type;
        if (icon4 != null) {
          type = icon4.type;
        }
        if ("imageSource" === type) {
          let assetSource = left.resolveAssetSource(item.icon.imageSource);
        } else {
          let icon = item.icon;
          let type1;
          if (icon != null) {
            type1 = icon.type;
          }
          if ("templateSource" === type1) {
            let assetSource1 = left.resolveAssetSource(item.icon.templateSource);
          }
        }
        let tmp7;
        if (item.titleStyle) {
          let obj = {};
          let merged = Object.assign(item.titleStyle);
          obj.color = closure_1_1(item.titleStyle.color);
          tmp7 = obj;
        }
        let tmp11;
        if (item.tintColor) {
          tmp11 = closure_1_1(item.tintColor);
        }
        let tmp13;
        if (item.badge) {
          let merged1 = Object.assign(item.badge);
          obj = {};
          let merged2 = Object.assign(item.badge.style);
          const style = item.badge.style;
          let color;
          if (style != null) {
            color = style.color;
          }
          obj.color = closure_1_1(color);
          const style2 = item.badge.style;
          let backgroundColor;
          if (style2 != null) {
            backgroundColor = style2.backgroundColor;
          }
          obj.backgroundColor = closure_1_1(backgroundColor);
          obj.style = obj;
          tmp13 = obj;
        }
        obj1 = {};
        let merged3 = Object.assign(item);
        obj1.imageSource = assetSource;
        obj1.templateSource = assetSource1;
        let icon2 = item.icon;
        let type2;
        if (icon2 != null) {
          type2 = icon2.type;
        }
        let name;
        if ("sfSymbol" === type2) {
          name = item.icon.name;
        }
        obj1.sfSymbolName = name;
        let icon3 = item.icon;
        let type3;
        if (icon3 != null) {
          type3 = icon3.type;
        }
        let name1;
        if ("xcasset" === type3) {
          name1 = item.icon.name;
        }
        obj1.xcassetName = name1;
        obj1.titleStyle = tmp7;
        obj1.tintColor = tmp11;
        obj1.badge = tmp13;
        if ("button" === item.type) {
          const obj2 = {};
          const merged4 = Object.assign(obj1);
          let _HermesInternal = HermesInternal;
          obj2.buttonId = "" + index + "-" + left;
          let tmp38 = obj2;
        } else {
          tmp38 = null;
          if ("menu" === item.type) {
            const obj3 = {};
            const merged5 = Object.assign(obj1);
            const menu = item.menu;
            if (typeof prepareMenu !== "function") {
              HermesBuiltin.throwTypeError();
            }
            left = index;
            closure_1 = left;
            const obj4 = {};
            const merged6 = Object.assign(menu);
            let items = menu.items;
            obj4.items = items.map((item, index) => {
              const icon = item.icon;
              let type;
              if (icon != null) {
                type = icon.type;
              }
              if ("sfSymbol" === type) {
                const icon2 = item.icon;
                let name;
                if (icon2 != null) {
                  name = icon2.name;
                }
              }
              if ("xcasset" === type) {
                const icon3 = item.icon;
                let name1;
                if (icon3 != null) {
                  name1 = icon3.name;
                }
              }
              const icon4 = item.icon;
              let type1;
              if (icon4 != null) {
                type1 = icon4.type;
              }
              if ("imageSource" === type1) {
                const assetSource = index.resolveAssetSource(item.icon.imageSource);
              } else {
                const icon5 = item.icon;
                let type2;
                if (icon5 != null) {
                  type2 = icon5.type;
                }
                if ("templateSource" === type2) {
                  const assetSource1 = index.resolveAssetSource(item.icon.templateSource);
                }
              }
              if ("submenu" === item.type) {
                let obj = {};
                const merged = Object.assign(item);
                obj.sfSymbolName = tmp2;
                obj.xcassetName = tmp4;
                obj.imageSource = assetSource;
                obj.templateSource = assetSource1;
                if (typeof closure_1_2 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                obj = {};
                const merged1 = Object.assign(item);
                const items = item.items;
                obj.items = items.map((item, index) => {
                  const icon = item.icon;
                  let type;
                  if (icon != null) {
                    type = icon.type;
                  }
                  if ("sfSymbol" === type) {
                    const icon2 = item.icon;
                    let name;
                    if (icon2 != null) {
                      name = icon2.name;
                    }
                  }
                  if ("xcasset" === type) {
                    const icon3 = item.icon;
                    let name1;
                    if (icon3 != null) {
                      name1 = icon3.name;
                    }
                  }
                  const icon4 = item.icon;
                  let type1;
                  if (icon4 != null) {
                    type1 = icon4.type;
                  }
                  if ("imageSource" === type1) {
                    const assetSource = index.resolveAssetSource(item.icon.imageSource);
                  } else {
                    const icon5 = item.icon;
                    let type2;
                    if (icon5 != null) {
                      type2 = icon5.type;
                    }
                    if ("templateSource" === type2) {
                      const assetSource1 = index.resolveAssetSource(item.icon.templateSource);
                    }
                  }
                  if ("submenu" === item.type) {
                    let obj = {};
                    const merged = Object.assign(item);
                    obj.sfSymbolName = tmp2;
                    obj.xcassetName = tmp4;
                    obj.imageSource = assetSource;
                    obj.templateSource = assetSource1;
                    if (typeof closure_1_2 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    obj = {};
                    const merged1 = Object.assign(item);
                    const items = item.items;
                    obj.items = items.map((item, index) => {
                      const icon = item.icon;
                      let type;
                      if (icon != null) {
                        type = icon.type;
                      }
                      if ("sfSymbol" === type) {
                        const icon2 = item.icon;
                        let name;
                        if (icon2 != null) {
                          name = icon2.name;
                        }
                      }
                      if ("xcasset" === type) {
                        const icon3 = item.icon;
                        let name1;
                        if (icon3 != null) {
                          name1 = icon3.name;
                        }
                      }
                      const icon4 = item.icon;
                      let type1;
                      if (icon4 != null) {
                        type1 = icon4.type;
                      }
                      if ("imageSource" === type1) {
                        const assetSource = index.resolveAssetSource(item.icon.imageSource);
                      } else {
                        const icon5 = item.icon;
                        let type2;
                        if (icon5 != null) {
                          type2 = icon5.type;
                        }
                        if ("templateSource" === type2) {
                          const assetSource1 = index.resolveAssetSource(item.icon.templateSource);
                        }
                      }
                      if ("submenu" === item.type) {
                        let obj = {};
                        const merged = Object.assign(item);
                        obj.sfSymbolName = tmp2;
                        obj.xcassetName = tmp4;
                        obj.imageSource = assetSource;
                        obj.templateSource = assetSource1;
                        if (typeof closure_1_2 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        obj = {};
                        const merged1 = Object.assign(item);
                        const items = item.items;
                        obj.items = items.map(() => { ... });
                        const merged2 = Object.assign(obj);
                      } else {
                        obj = {};
                        const merged3 = Object.assign(item);
                        obj.sfSymbolName = tmp2;
                        obj.xcassetName = tmp4;
                        obj.imageSource = assetSource;
                        obj.templateSource = assetSource1;
                        const _HermesInternal = HermesInternal;
                        obj.menuId = "" + index + "-" + index + "-" + closure_1;
                      }
                      return obj;
                    });
                    const merged2 = Object.assign(obj);
                  } else {
                    obj = {};
                    const merged3 = Object.assign(item);
                    obj.sfSymbolName = tmp2;
                    obj.xcassetName = tmp4;
                    obj.imageSource = assetSource;
                    obj.templateSource = assetSource1;
                    const _HermesInternal = HermesInternal;
                    obj.menuId = "" + index + "-" + index + "-" + closure_1;
                  }
                  return obj;
                });
                const merged2 = Object.assign(obj);
              } else {
                obj = {};
                const merged3 = Object.assign(item);
                obj.sfSymbolName = tmp2;
                obj.xcassetName = tmp4;
                obj.imageSource = assetSource;
                obj.templateSource = assetSource1;
                const _HermesInternal = HermesInternal;
                obj.menuId = "" + index + "-" + index + "-" + closure_1;
              }
              return obj;
            });
            obj3.menu = obj4;
            tmp38 = obj3;
          }
        }
        return tmp38;
      }
    });
  }
  return mapped;
};