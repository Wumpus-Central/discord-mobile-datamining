// === Module 4847: prepareMenu ===

// Module 4847 (prepareMenu)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ Image: c0, processColor: closure_1 } = get_ActivityIndicator);
function prepareMenu(arg0, arg1, arg2) {

}

export const prepareHeaderBarButtonItems = (arr) => {
  closure_0 = arg1;
  let mapped;
  if (arr != null) {
    mapped = arr.map((type) => {
      if ("spacing" === type.type) {
        return type;
      } else {
        let icon4 = type.icon;
        type = undefined;
        if (icon4 != null) {
          type = icon4.type;
        }
        if ("imageSource" === type) {
          let assetSource = closure_0.resolveAssetSource(type.icon.imageSource);
        } else {
          let icon = type.icon;
          let type1;
          if (icon != null) {
            type1 = icon.type;
          }
          if ("templateSource" === type1) {
            let assetSource1 = closure_0.resolveAssetSource(type.icon.templateSource);
          }
        }
        let tmp7;
        if (type.titleStyle) {
          let obj = {};
          let merged = Object.assign(type.titleStyle);
          obj.color = closure_1_1(type.titleStyle.color);
          tmp7 = obj;
        }
        let tmp11;
        if (type.tintColor) {
          tmp11 = closure_1_1(type.tintColor);
        }
        let tmp13;
        if (type.badge) {
          obj = {};
          let merged1 = Object.assign(type.badge);
          obj = {};
          let merged2 = Object.assign(type.badge.style);
          const style = type.badge.style;
          let color;
          if (style != null) {
            color = style.color;
          }
          obj.color = closure_1_1(color);
          const style2 = type.badge.style;
          let backgroundColor;
          if (style2 != null) {
            backgroundColor = style2.backgroundColor;
          }
          obj.backgroundColor = closure_1_1(backgroundColor);
          obj.style = obj;
          tmp13 = obj;
          const tmp18 = closure_1_1;
          const tmp20 = closure_1_1;
        }
        obj1 = {};
        let merged3 = Object.assign(type);
        obj1.imageSource = assetSource;
        obj1.templateSource = assetSource1;
        let icon2 = type.icon;
        let type2;
        if (icon2 != null) {
          type2 = icon2.type;
        }
        let name;
        if ("sfSymbol" === type2) {
          name = type.icon.name;
        }
        obj1.sfSymbolName = name;
        let icon3 = type.icon;
        let type3;
        if (icon3 != null) {
          type3 = icon3.type;
        }
        let name1;
        if ("xcasset" === type3) {
          name1 = type.icon.name;
        }
        obj1.xcassetName = name1;
        obj1.titleStyle = tmp7;
        obj1.tintColor = tmp11;
        obj1.badge = tmp13;
        if ("button" === type.type) {
          const obj2 = {};
          const merged4 = Object.assign(obj1);
          let _HermesInternal = HermesInternal;
          obj2.buttonId = "" + arg1 + "-" + closure_0;
          let tmp38 = obj2;
        } else {
          tmp38 = null;
          if ("menu" === type.type) {
            const obj3 = {};
            const merged5 = Object.assign(obj1);
            const menu = type.menu;
            if (typeof closure_1_2 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            closure_0 = arg1;
            closure_1 = closure_0;
            const obj4 = {};
            const merged6 = Object.assign(menu);
            let items = menu.items;
            obj4.items = items.map((icon) => {
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
                const assetSource = closure_0.resolveAssetSource(icon.icon.imageSource);
              } else {
                const icon5 = icon.icon;
                let type2;
                if (icon5 != null) {
                  type2 = icon5.type;
                }
                if ("templateSource" === type2) {
                  const assetSource1 = closure_0.resolveAssetSource(icon.icon.templateSource);
                }
              }
              if ("submenu" === icon.type) {
                let obj = {};
                const merged = Object.assign(icon);
                obj.sfSymbolName = tmp2;
                obj.xcassetName = tmp4;
                obj.imageSource = assetSource;
                obj.templateSource = assetSource1;
                if (typeof closure_1_2 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                closure_0 = arg1;
                obj = {};
                const merged1 = Object.assign(icon);
                const items = icon.items;
                obj.items = items.map((icon) => {
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
                    const assetSource = closure_0.resolveAssetSource(icon.icon.imageSource);
                  } else {
                    const icon5 = icon.icon;
                    let type2;
                    if (icon5 != null) {
                      type2 = icon5.type;
                    }
                    if ("templateSource" === type2) {
                      const assetSource1 = closure_0.resolveAssetSource(icon.icon.templateSource);
                    }
                  }
                  if ("submenu" === icon.type) {
                    let obj = {};
                    const merged = Object.assign(icon);
                    obj.sfSymbolName = tmp2;
                    obj.xcassetName = tmp4;
                    obj.imageSource = assetSource;
                    obj.templateSource = assetSource1;
                    if (typeof closure_1_2 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    closure_0 = arg1;
                    obj = {};
                    const merged1 = Object.assign(icon);
                    const items = icon.items;
                    obj.items = items.map((icon) => {
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
                        const assetSource = closure_0.resolveAssetSource(icon.icon.imageSource);
                      } else {
                        const icon5 = icon.icon;
                        let type2;
                        if (icon5 != null) {
                          type2 = icon5.type;
                        }
                        if ("templateSource" === type2) {
                          const assetSource1 = closure_0.resolveAssetSource(icon.icon.templateSource);
                        }
                      }
                      if ("submenu" === icon.type) {
                        let obj = {};
                        const merged = Object.assign(icon);
                        obj.sfSymbolName = tmp2;
                        obj.xcassetName = tmp4;
                        obj.imageSource = assetSource;
                        obj.templateSource = assetSource1;
                        if (typeof closure_1_2 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        closure_0 = arg1;
                        obj = {};
                        const merged1 = Object.assign(icon);
                        const items = icon.items;
                        obj.items = items.map(() => { ... });
                        const merged2 = Object.assign(obj);
                        const tmp23 = closure_1;
                      } else {
                        obj = {};
                        const merged3 = Object.assign(icon);
                        obj.sfSymbolName = tmp2;
                        obj.xcassetName = tmp4;
                        obj.imageSource = assetSource;
                        obj.templateSource = assetSource1;
                        const _HermesInternal = HermesInternal;
                        obj.menuId = "" + arg1 + "-" + closure_0 + "-" + closure_1;
                      }
                      return obj;
                    });
                    const merged2 = Object.assign(obj);
                    const tmp23 = closure_1;
                  } else {
                    obj = {};
                    const merged3 = Object.assign(icon);
                    obj.sfSymbolName = tmp2;
                    obj.xcassetName = tmp4;
                    obj.imageSource = assetSource;
                    obj.templateSource = assetSource1;
                    const _HermesInternal = HermesInternal;
                    obj.menuId = "" + arg1 + "-" + closure_0 + "-" + closure_1;
                  }
                  return obj;
                });
                const merged2 = Object.assign(obj);
                const tmp23 = closure_1;
              } else {
                obj = {};
                const merged3 = Object.assign(icon);
                obj.sfSymbolName = tmp2;
                obj.xcassetName = tmp4;
                obj.imageSource = assetSource;
                obj.templateSource = assetSource1;
                const _HermesInternal = HermesInternal;
                obj.menuId = "" + arg1 + "-" + closure_0 + "-" + closure_1;
              }
              return obj;
            });
            obj3.menu = obj4;
            tmp38 = obj3;
            const tmp34 = closure_0;
          }
        }
        return tmp38;
      }
    });
  }
  return mapped;
};