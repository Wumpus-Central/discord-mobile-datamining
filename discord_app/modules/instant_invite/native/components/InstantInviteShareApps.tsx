// discord_app/modules/instant_invite/native/components/InstantInviteShareApps.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const InstantInviteConstants = fn(8700);
({ SHARE_ITEMS: closure_7, SHARE_ITEMS_DEFAULT: closure_8 } = InstantInviteConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = {
  contentContainer: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" },
};
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function InstantInviteShareApps(onItemPressed) {
        const cResult = onItemPressed(576).c(19);
        onItemPressed = onItemPressed.onItemPressed;
        const contentContainerStyle = onItemPressed.contentContainerStyle;
        const tmp4 = closure_10();
        let obj = onItemPressed(576);
        const fontScale = onItemPressed(5382).useFontScale();
        const obj2 = onItemPressed(5382);
        [arr, dependencyMap] = noop.useState(closure_8);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { disallowInterruption: true };
          cResult[0] = obj4;
          let first = obj4;
        } else {
          first = cResult[0];
        }
        const tmp6 = _slicedToArray(noop.useState(closure_8), 2);
        const nativeGesture = onItemPressed(6326).useNativeGesture(first);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function x() {
            Promise.all(React5.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
              const items = [];
              const item = arr.forEach((item, index) => {
                if (item) {
                  items.push(closure_2_7[index]);
                }
              });
              dependencyMap(items);
            });
          };
          let items = [];
          cResult[1] = fn;
          cResult[2] = items;
          let tmp10 = items;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[1];
          tmp10 = cResult[2];
        }
        const effect = noop.useEffect(tmp9, tmp10);
        if (cResult[3] === contentContainerStyle) {
          if (cResult[4] === tmp4.contentContainer) {
            let tmp12 = cResult[5];
          }
          if (cResult[6] === fontScale) {
            if (cResult[7] === onItemPressed) {
              if (cResult[8] === arr) {
                if (cResult[13] === tmp12) {
                  if (cResult[14] === tmp13) {
                    let tmp17 = cResult[15];
                  }
                  if (cResult[16] === nativeGesture) {
                    if (cResult[17] === tmp17) {
                      let tmp20 = cResult[18];
                    }
                    return tmp20;
                  }
                  class M {
                    constructor(arg0) {
                      ({ fullIcon, getLabel, icon, IconComponent, onPress } = onItemPressed);
                      tmp = closure_1_9;
                      obj = { style: null, children: null };
                      obj1 = { maxWidth: 76 * closure_1 };
                      obj.style = obj1;
                      tmp2 = closure_1_5;
                      if (null != fullIcon) {
                        tmp7 = onItemPressed;
                        tmp8 = closure_2;
                        obj5 = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
                        obj5.image = fullIcon;
                        obj5.label = getLabel();
                        obj5.onPress = function onPress() {
                          return onItemPressed(closure_1_0);
                        };
                        tmpResult = tmp(onItemPressed(closure_2[11]).ImageButton, obj5);
                      } else {
                        tmp3 = onItemPressed;
                        tmp4 = closure_2;
                        if (null == IconComponent) {
                          if (icon == null) {
                            tmp5 = closure_1;
                            icon = closure_1(tmp4[13]);
                          }
                          IconComponent = icon;
                        }
                        obj6 = {
                          variant: "secondary",
                          icon: null,
                          label: null,
                          onPress: null,
                          maxFontSizeMultiplier: 2,
                        };
                        obj6.icon = IconComponent;
                        obj6.label = getLabel();
                        obj6.onPress = function onPress() {
                          return onItemPressed(closure_1_0);
                        };
                        tmpResult = tmp(onItemPressed(closure_2[12]).IconButton, obj6);
                      }
                      obj.children = tmpResult;
                      return tmp(tmp2, obj, onItemPressed.type);
                    }
                  }
                  tmp22[0] = nativeGesture;
                  tmp22[1] = tmp17;
                  const tmp23 = jsx(tmp(6326).GestureDetector, tmp22);
                  cResult[16] = nativeGesture;
                  cResult[17] = tmp17;
                  cResult[18] = tmp23;
                  tmp20 = tmp23;
                }
                class M {
                  constructor(arg0) {
                    ({ fullIcon, getLabel, icon, IconComponent, onPress } = onItemPressed);
                    tmp = closure_1_9;
                    obj = { style: null, children: null };
                    obj1 = { maxWidth: 76 * closure_1 };
                    obj.style = obj1;
                    tmp2 = closure_1_5;
                    if (null != fullIcon) {
                      tmp7 = onItemPressed;
                      tmp8 = closure_2;
                      obj5 = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
                      obj5.image = fullIcon;
                      obj5.label = getLabel();
                      obj5.onPress = function onPress() {
                        return onItemPressed(closure_1_0);
                      };
                      tmpResult = tmp(onItemPressed(closure_2[11]).ImageButton, obj5);
                    } else {
                      tmp3 = onItemPressed;
                      tmp4 = closure_2;
                      if (null == IconComponent) {
                        if (icon == null) {
                          tmp5 = closure_1;
                          icon = closure_1(tmp4[13]);
                        }
                        IconComponent = icon;
                      }
                      obj6 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
                      obj6.icon = IconComponent;
                      obj6.label = getLabel();
                      obj6.onPress = function onPress() {
                        return onItemPressed(closure_1_0);
                      };
                      tmpResult = tmp(onItemPressed(closure_2[12]).IconButton, obj6);
                    }
                    obj.children = tmpResult;
                    return tmp(tmp2, obj, onItemPressed.type);
                  }
                }
                const obj5 = {
                  contentContainerStyle: tmp12,
                  showsHorizontalScrollIndicator: false,
                  horizontal: true,
                  children: cResult[9],
                };
                const tmp19 = (
                  <closure_6 contentContainerStyle={tmp12} showsHorizontalScrollIndicator={false} horizontal>
                    {cResult[9]}
                  </closure_6>
                );
                cResult[13] = tmp12;
                cResult[14] = cResult[9];
                cResult[15] = tmp19;
                tmp17 = tmp19;
              }
            }
          }
          if (cResult[10] === fontScale) {
            if (cResult[11] === onItemPressed) {
              let tmp14 = cResult[12];
            }
            const mapped = arr.map(tmp14);
            class M {
              constructor(arg0) {
                ({ fullIcon, getLabel, icon, IconComponent, onPress } = onItemPressed);
                tmp = closure_1_9;
                obj = { style: null, children: null };
                obj1 = { maxWidth: 76 * closure_1 };
                obj.style = obj1;
                tmp2 = closure_1_5;
                if (null != fullIcon) {
                  tmp7 = onItemPressed;
                  tmp8 = closure_2;
                  obj5 = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
                  obj5.image = fullIcon;
                  obj5.label = getLabel();
                  obj5.onPress = function onPress() {
                    return onItemPressed(closure_1_0);
                  };
                  tmpResult = tmp(onItemPressed(closure_2[11]).ImageButton, obj5);
                } else {
                  tmp3 = onItemPressed;
                  tmp4 = closure_2;
                  if (null == IconComponent) {
                    if (icon == null) {
                      tmp5 = closure_1;
                      icon = closure_1(tmp4[13]);
                    }
                    IconComponent = icon;
                  }
                  obj6 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
                  obj6.icon = IconComponent;
                  obj6.label = getLabel();
                  obj6.onPress = function onPress() {
                    return onItemPressed(closure_1_0);
                  };
                  tmpResult = tmp(onItemPressed(closure_2[12]).IconButton, obj6);
                }
                obj.children = tmpResult;
                return tmp(tmp2, obj, onItemPressed.type);
              }
            }
            cResult[7] = onItemPressed;
            cResult[8] = arr;
            cResult[9] = mapped;
          }
          class M {
            constructor(arg0) {
              ({ fullIcon, getLabel, icon, IconComponent, onPress } = onItemPressed);
              tmp = closure_1_9;
              obj = { style: null, children: null };
              obj1 = { maxWidth: 76 * closure_1 };
              obj.style = obj1;
              tmp2 = closure_1_5;
              if (null != fullIcon) {
                tmp7 = onItemPressed;
                tmp8 = closure_2;
                obj5 = { image: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
                obj5.image = fullIcon;
                obj5.label = getLabel();
                obj5.onPress = function onPress() {
                  return onItemPressed(closure_1_0);
                };
                tmpResult = tmp(onItemPressed(closure_2[11]).ImageButton, obj5);
              } else {
                tmp3 = onItemPressed;
                tmp4 = closure_2;
                if (null == IconComponent) {
                  if (icon == null) {
                    tmp5 = closure_1;
                    icon = closure_1(tmp4[13]);
                  }
                  IconComponent = icon;
                }
                obj6 = { variant: "secondary", icon: null, label: null, onPress: null, maxFontSizeMultiplier: 2 };
                obj6.icon = IconComponent;
                obj6.label = getLabel();
                obj6.onPress = function onPress() {
                  return onItemPressed(closure_1_0);
                };
                tmpResult = tmp(onItemPressed(closure_2[12]).IconButton, obj6);
              }
              obj.children = tmpResult;
              return tmp(tmp2, obj, onItemPressed.type);
            }
          }
          cResult[10] = fontScale;
          cResult[11] = onItemPressed;
          cResult[12] = M;
          tmp14 = M;
        }
        const items1 = [tmp4.contentContainer, contentContainerStyle];
        cResult[3] = contentContainerStyle;
        cResult[4] = tmp4.contentContainer;
        cResult[5] = items1;
        tmp12 = items1;
        let tmpResult = onItemPressed(6326);
      }
    : function InstantInviteShareApps(onItemPressed) {
        onItemPressed = onItemPressed.onItemPressed;
        dependencyMap = undefined;
        const tmp = closure_10();
        closure_1 = onItemPressed(5382).useFontScale();
        let obj = onItemPressed(5382);
        [arr, c2] = noop.useState(closure_8);
        const tmp2 = _slicedToArray(noop.useState(closure_8), 2);
        const gesture = onItemPressed(6326).useNativeGesture({ disallowInterruption: true });
        const effect = noop.useEffect(() => {
          Promise.all(React5.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
            const items = [];
            const item = arr.forEach((item, index) => {
              if (item) {
                items.push(closure_2_7[index]);
              }
            });
            _undefined(items);
          });
        }, []);
        let obj3 = {
          contentContainerStyle: null,
          showsHorizontalScrollIndicator: false,
          horizontal: true,
          children: arr.map((type) => {
            ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
            const obj = { style: { maxWidth: 76 * closure_1 }, children: null };
            if (null != fullIcon) {
              const obj3 = {
                image: fullIcon,
                label: getLabel(),
                onPress() {
                  return onItemPressed(closure_1_0);
                },
                maxFontSizeMultiplier: 2,
              };
              let tmpResult = jsx(onItemPressed(_undefined[11]).ImageButton, {
                image: fullIcon,
                label: getLabel(),
                onPress() {
                  return onItemPressed(closure_1_0);
                },
                maxFontSizeMultiplier: 2,
              });
            } else {
              if (null == IconComponent) {
                if (icon == null) {
                  icon = closure_1(_undefined[13]);
                }
                IconComponent = icon;
              }
              const obj4 = {
                variant: "secondary",
                icon: IconComponent,
                label: getLabel(),
                onPress() {
                  return onItemPressed(closure_1_0);
                },
                maxFontSizeMultiplier: 2,
              };
              tmpResult = jsx(onItemPressed(_undefined[12]).IconButton, {
                variant: "secondary",
                icon: IconComponent,
                label: getLabel(),
                onPress() {
                  return onItemPressed(closure_1_0);
                },
                maxFontSizeMultiplier: 2,
              });
            }
            obj.children = tmpResult;
            return (
              <closure_1_5 key={type.type} style={{ maxWidth: 76 * closure_1 }}>
                {null}
              </closure_1_5>
            );
          }),
        };
        let items = [tmp.contentContainer, onItemPressed.contentContainerStyle];
        obj3.contentContainerStyle = items;
        const children = (
          <closure_6 contentContainerStyle={null} showsHorizontalScrollIndicator={false} horizontal>
            {arr.map((type) => {
              ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
              const obj = { style: { maxWidth: 76 * closure_1 }, children: null };
              if (null != fullIcon) {
                const obj3 = {
                  image: fullIcon,
                  label: getLabel(),
                  onPress() {
                    return onItemPressed(closure_1_0);
                  },
                  maxFontSizeMultiplier: 2,
                };
                let tmpResult = jsx(onItemPressed(_undefined[11]).ImageButton, {
                  image: fullIcon,
                  label: getLabel(),
                  onPress() {
                    return onItemPressed(closure_1_0);
                  },
                  maxFontSizeMultiplier: 2,
                });
              } else {
                if (null == IconComponent) {
                  if (icon == null) {
                    icon = closure_1(_undefined[13]);
                  }
                  IconComponent = icon;
                }
                const obj4 = {
                  variant: "secondary",
                  icon: IconComponent,
                  label: getLabel(),
                  onPress() {
                    return onItemPressed(closure_1_0);
                  },
                  maxFontSizeMultiplier: 2,
                };
                tmpResult = jsx(onItemPressed(_undefined[12]).IconButton, {
                  variant: "secondary",
                  icon: IconComponent,
                  label: getLabel(),
                  onPress() {
                    return onItemPressed(closure_1_0);
                  },
                  maxFontSizeMultiplier: 2,
                });
              }
              obj.children = tmpResult;
              return (
                <closure_1_5 key={type.type} style={{ maxWidth: 76 * closure_1 }}>
                  {null}
                </closure_1_5>
              );
            })}
          </closure_6>
        );
        return jsx(onItemPressed(6326).GestureDetector, { gesture, children });
      },
);
