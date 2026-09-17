// _runtime/05020_prepareMenu.js
import get_ActivityIndicator from "metro/00017__.js";

({ Image: closure_0, processColor: closure_1 } = get_ActivityIndicator);
function prepareMenu(arg0, arg1, arg2) {

}

export const prepareHeaderBarButtonItems = (headerLeftBarButtonItems, left) => {
  closure_0 = left;
  let mapped;
  if (headerLeftBarButtonItems != null) {
    mapped = headerLeftBarButtonItems.map((type, index) => {
      if ("spacing" === type.type) {
        return type;
      } else {
        let icon4 = type.icon;
        type = undefined;
        if (icon4 != null) {
          type = icon4.type;
        }
        if ("imageSource" === type) {
          let assetSource = React.resolveAssetSource(type.icon.imageSource);
        } else {
          let icon = type.icon;
          let type1;
          if (icon != null) {
            type1 = icon.type;
          }
          if ("templateSource" === type1) {
            let assetSource1 = React.resolveAssetSource(type.icon.templateSource);
          }
        }
        let tmp7;
        if (type.titleStyle) {
          let obj = {};
          let merged = Object.assign(type.titleStyle);
          obj.color = framebus(type.titleStyle.color);
          tmp7 = obj;
        }
        let tmp11;
        if (type.tintColor) {
          tmp11 = framebus(type.tintColor);
        }
        let tmp13;
        if (type.badge) {
          let obj2 = {};
          let merged1 = Object.assign(type.badge);
          let obj3 = {};
          let merged2 = Object.assign(type.badge.style);
          const style = type.badge.style;
          let color;
          if (style != null) {
            color = style.color;
          }
          obj3.color = framebus(color);
          const style2 = type.badge.style;
          let backgroundColor;
          if (style2 != null) {
            backgroundColor = style2.backgroundColor;
          }
          obj3.backgroundColor = framebus(backgroundColor);
          obj2.style = obj3;
          tmp13 = obj2;
        }
        const obj4 = {};
        let merged3 = Object.assign(type);
        obj4.imageSource = assetSource;
        obj4.templateSource = assetSource1;
        let icon2 = type.icon;
        let type2;
        if (icon2 != null) {
          type2 = icon2.type;
        }
        let name;
        if ("sfSymbol" === type2) {
          name = type.icon.name;
        }
        obj4.sfSymbolName = name;
        let icon3 = type.icon;
        let type3;
        if (icon3 != null) {
          type3 = icon3.type;
        }
        let name1;
        if ("xcasset" === type3) {
          name1 = type.icon.name;
        }
        obj4.xcassetName = name1;
        obj4.titleStyle = tmp7;
        obj4.tintColor = tmp11;
        obj4.badge = tmp13;
        if ("button" === type.type) {
          const obj5 = {};
          const merged4 = Object.assign(obj4);
          let _HermesInternal = HermesInternal;
          obj5.buttonId = "" + index + "-" + index;
          let tmp38 = obj5;
        } else {
          tmp38 = null;
          if ("menu" === type.type) {
            const obj6 = {};
            const merged5 = Object.assign(obj4);
            const menu = type.menu;
            if (typeof prepareMenu === "function") {
              closure_1 = tmp34;
              c2 = "";
              const obj7 = {};
              const merged6 = Object.assign(menu);
              let items = menu.items;
              obj7.items = items.map((icon, index) => {
                if (c2) {
                  let str = concat(tmp, ".", index);
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
                  const assetSource = index.resolveAssetSource(icon.icon.imageSource);
                } else {
                  const icon5 = icon.icon;
                  let type2;
                  if (icon5 != null) {
                    type2 = icon5.type;
                  }
                  if ("templateSource" === type2) {
                    const assetSource1 = index.resolveAssetSource(icon.icon.templateSource);
                  }
                }
                if ("submenu" === icon.type) {
                  const obj2 = {};
                  const merged = Object.assign(icon);
                  obj2.sfSymbolName = tmp3;
                  obj2.xcassetName = tmp5;
                  obj2.imageSource = assetSource;
                  obj2.templateSource = assetSource1;
                  if (typeof prepareMenu === "function") {
                    closure_1 = tmp23;
                    if (str === undefined) {
                      str = "";
                    }
                    const obj3 = {};
                    const merged1 = Object.assign(icon);
                    const items = icon.items;
                    obj3.items = items.map((icon, index) => {
                      if (c2) {
                        let str = concat(tmp, ".", index);
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
                        const assetSource = index.resolveAssetSource(icon.icon.imageSource);
                      } else {
                        const icon5 = icon.icon;
                        let type2;
                        if (icon5 != null) {
                          type2 = icon5.type;
                        }
                        if ("templateSource" === type2) {
                          const assetSource1 = index.resolveAssetSource(icon.icon.templateSource);
                        }
                      }
                      if ("submenu" === icon.type) {
                        const obj2 = {};
                        const merged = Object.assign(icon);
                        obj2.sfSymbolName = tmp3;
                        obj2.xcassetName = tmp5;
                        obj2.imageSource = assetSource;
                        obj2.templateSource = assetSource1;
                        if (typeof prepareMenu === "function") {
                          closure_1 = tmp23;
                          if (str === undefined) {
                            str = "";
                          }
                          const obj3 = {};
                          const merged1 = Object.assign(icon);
                          const items = icon.items;
                          obj3.items = items.map((icon, index) => {
                            if (c2) {
                              let str = concat(tmp, ".", index);
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
                              const assetSource = index.resolveAssetSource(icon.icon.imageSource);
                            } else {
                              const icon5 = icon.icon;
                              let type2;
                              if (icon5 != null) {
                                type2 = icon5.type;
                              }
                              if ("templateSource" === type2) {
                                const assetSource1 = index.resolveAssetSource(icon.icon.templateSource);
                              }
                            }
                            if ("submenu" === icon.type) {
                              const obj2 = {};
                              const merged = Object.assign(icon);
                              obj2.sfSymbolName = tmp3;
                              obj2.xcassetName = tmp5;
                              obj2.imageSource = assetSource;
                              obj2.templateSource = assetSource1;
                              if (typeof prepareMenu === "function") {
                                closure_1 = tmp23;
                                if (str === undefined) {
                                  str = "";
                                }
                                const obj3 = {};
                                const merged1 = Object.assign(icon);
                                const items = icon.items;
                                obj3.items = items.map(() => { ... });
                                const merged2 = Object.assign(obj3);
                                let obj = obj2;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              obj = {};
                              const merged3 = Object.assign(icon);
                              obj.sfSymbolName = tmp3;
                              obj.xcassetName = tmp5;
                              obj.imageSource = assetSource;
                              obj.templateSource = assetSource1;
                              const _HermesInternal = HermesInternal;
                              obj.menuId = "" + str + "-" + index + "-" + closure_1;
                            }
                            return obj;
                          });
                          const merged2 = Object.assign(obj3);
                          let obj = obj2;
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        obj = {};
                        const merged3 = Object.assign(icon);
                        obj.sfSymbolName = tmp3;
                        obj.xcassetName = tmp5;
                        obj.imageSource = assetSource;
                        obj.templateSource = assetSource1;
                        const _HermesInternal = HermesInternal;
                        obj.menuId = "" + str + "-" + index + "-" + closure_1;
                      }
                      return obj;
                    });
                    const merged2 = Object.assign(obj3);
                    let obj = obj2;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  obj = {};
                  const merged3 = Object.assign(icon);
                  obj.sfSymbolName = tmp3;
                  obj.xcassetName = tmp5;
                  obj.imageSource = assetSource;
                  obj.templateSource = assetSource1;
                  const _HermesInternal = HermesInternal;
                  obj.menuId = "" + str + "-" + index + "-" + closure_1;
                }
                return obj;
              });
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