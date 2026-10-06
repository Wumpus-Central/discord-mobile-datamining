// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap,
  num2,
  num3,
  obj1,
  obj10,
  obj11,
  obj12,
  obj8,
  obj9,
  str,
  str2,
  tmp13,
  tmp13Result,
  tmp15,
  tmp16,
  tmp17,
  tmp18,
  tmp20,
  tmp21,
  tmp3,
  tmp5,
  tmp6,
  tmp8;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((height) => {
  const obj = {
    container: { flexDirection: "row", alignItems: "center", marginLeft: -2 },
    overflowCircle: size,
    wrapper: {
      borderRadius: nativeDefault.radii.round,
      borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
      borderWidth: 2,
    },
    badge: {
      borderRadius: nativeDefault.radii.round,
      paddingHorizontal: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height,
    },
    audienceBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  };
  size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height,
    width: height,
  };
  ({
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
  });
  ({
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let audienceCount;
        let closure_2;
        let guildId;
        let items;
        let items2;
        let items3;
        let layout;
        let max;
        let obj5;
        let tmp17Result;
        let tmp4;
        let tmp9;
        let users;
        const tmp2 = dependencyMap;
        let obj = guildId(576);
        const cResult = obj.c(32);
        ({ users, max, guildId } = arg0);
        ({ layout, audienceCount } = arg0);
        let num = 5;
        if (undefined !== max) {
          num = max;
        }
        if (cResult[0] !== layout) {
          const tmpResult = guildId(11712);
          const layoutStyles = tmpResult.getLayoutStyles(layout);
          cResult[0] = layout;
          cResult[1] = layoutStyles;
          tmp4 = layoutStyles;
        } else {
          tmp4 = cResult[1];
        }
        dependencyMap = tmp4;
        size = tmp4.voiceOrStageSummaryRow.size;
        const bound = Math.max(users.length - num, 0);
        const tmp7 = closure_6(size);
        let closure_4 = tmp7;
        const sum = size + 4;
        if (cResult[2] !== sum) {
          let obj2 = { height: sum };
          cResult[2] = sum;
          cResult[3] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp7.container) {
          let tmp10;
          let tmp11;
          if (cResult[5] === tmp9) {
            tmp10 = cResult[6];
          }
          if (cResult[7] === guildId) {
            if (cResult[8] === tmp4.voiceOrStageSummaryRow.avatarSize) {
              if (cResult[9] === num) {
                if (cResult[10] === bound) {
                  if (cResult[11] === tmp7.overflowCircle) {
                    if (cResult[12] === tmp7.wrapper) {
                      if (cResult[13] === users) {
                        tmp11 = cResult[14];
                      }
                      if (cResult[22] === audienceCount) {
                        if (cResult[23] === tmp7.audienceBadge) {
                          if (cResult[24] === tmp7.badge) {
                            if (cResult[25] === tmp7.wrapper) {
                              let tmp14;
                              if (cResult[26] === users.length) {
                                tmp14 = cResult[27];
                              }
                              if (cResult[28] === tmp10) {
                                if (cResult[29] === tmp11) {
                                  let tmp22;
                                  if (cResult[30] === tmp14) {
                                    tmp22 = cResult[31];
                                  }
                                  return tmp22;
                                }
                              }
                              class O {
                                constructor(arg0, arg1) {
                                  if (arg1 >= max) {
                                    return;
                                  } else {
                                    num3 = 1;
                                    if (arg1 === tmp - 1) {
                                      num = 0;
                                      if (closure_3 > 0) {
                                        items = [,];
                                        items[0] = closure_4.wrapper;
                                        obj1 = 0 !== arg1;
                                        tmp13 = jsx;
                                        tmp14 = View;
                                        tmp15 = closure_4;
                                        if (obj1) {
                                          obj1 = { marginLeft: -12 };
                                        }
                                        obj8 = { style: null, children: null };
                                        items[1] = obj1;
                                        obj8.style = items;
                                        tmp16 = jsx;
                                        tmp17 = View;
                                        obj9 = { style: null, children: null };
                                        obj9.style = tmp15.overflowCircle;
                                        tmp18 = jsx;
                                        tmp19 = closure_0;
                                        tmp20 = closure_2;
                                        obj10 = { variant: "text-xs/medium", children: null };
                                        tmp21 = globalThis;
                                        _HermesInternal = HermesInternal;
                                        str = "+";
                                        Text = closure_0(closure_2[8]).Text;
                                        obj10.children = "+" + tmp2 + 1;
                                        obj9.children = jsx(Text, obj10);
                                        obj8.children = jsx(View, obj9);
                                        str2 = "overflow";
                                        tmp13Result = tmp13(tmp14, obj8, "overflow");
                                      }
                                      return tmp13Result;
                                    }
                                    tmp5 = closure_4;
                                    items1 = [,];
                                    items1[0] = closure_4.wrapper;
                                    num2 = 0;
                                    obj = 0 !== arg1;
                                    tmp3 = jsx;
                                    tmp4 = View;
                                    if (obj) {
                                      obj = { marginLeft: -12 };
                                    }
                                    tmp6 = arg0;
                                    obj11 = { style: null, children: null };
                                    items1[1] = obj;
                                    obj11.style = items1;
                                    tmp7 = jsx;
                                    tmp8 = closure_0;
                                    tmp9 = closure_2;
                                    obj12 = { user: null, guildId: null, size: null };
                                    obj12.user = arg0;
                                    tmp10 = guildId;
                                    obj12.guildId = guildId;
                                    tmp11 = closure_2;
                                    obj12.size = closure_2.voiceOrStageSummaryRow.avatarSize;
                                    obj11.children = jsx(closure_0(closure_2[9]).Avatar, obj12);
                                    tmp13Result = tmp3(tmp4, obj11, arg1);
                                  }
                                  return;
                                }
                              }
                              let obj3 = { style: tmp10, children: items };
                              items = [tmp11, tmp14];
                              const tmp24 = closure_5(bound, obj3);
                              cResult[28] = tmp10;
                              cResult[29] = tmp11;
                              cResult[30] = tmp14;
                              cResult[31] = tmp24;
                              tmp22 = tmp24;
                            }
                          }
                        }
                      }
                      class O {
                        constructor(arg0, arg1) {
                          if (arg1 >= max) {
                            return;
                          } else {
                            num3 = 1;
                            if (arg1 === tmp - 1) {
                              num = 0;
                              if (closure_3 > 0) {
                                items = [,];
                                items[0] = closure_4.wrapper;
                                obj1 = 0 !== arg1;
                                tmp13 = jsx;
                                tmp14 = View;
                                tmp15 = closure_4;
                                if (obj1) {
                                  obj1 = { marginLeft: -12 };
                                }
                                obj8 = { style: null, children: null };
                                items[1] = obj1;
                                obj8.style = items;
                                tmp16 = jsx;
                                tmp17 = View;
                                obj9 = { style: null, children: null };
                                obj9.style = tmp15.overflowCircle;
                                tmp18 = jsx;
                                tmp19 = closure_0;
                                tmp20 = closure_2;
                                obj10 = { variant: "text-xs/medium", children: null };
                                tmp21 = globalThis;
                                _HermesInternal = HermesInternal;
                                str = "+";
                                Text = closure_0(closure_2[8]).Text;
                                obj10.children = "+" + tmp2 + 1;
                                obj9.children = jsx(Text, obj10);
                                obj8.children = jsx(View, obj9);
                                str2 = "overflow";
                                tmp13Result = tmp13(tmp14, obj8, "overflow");
                              }
                              return tmp13Result;
                            }
                            tmp5 = closure_4;
                            items1 = [,];
                            items1[0] = closure_4.wrapper;
                            num2 = 0;
                            obj = 0 !== arg1;
                            tmp3 = jsx;
                            tmp4 = View;
                            if (obj) {
                              obj = { marginLeft: -12 };
                            }
                            tmp6 = arg0;
                            obj11 = { style: null, children: null };
                            items1[1] = obj;
                            obj11.style = items1;
                            tmp7 = jsx;
                            tmp8 = closure_0;
                            tmp9 = closure_2;
                            obj12 = { user: null, guildId: null, size: null };
                            obj12.user = arg0;
                            tmp10 = guildId;
                            obj12.guildId = guildId;
                            tmp11 = closure_2;
                            obj12.size = closure_2.voiceOrStageSummaryRow.avatarSize;
                            obj11.children = jsx(closure_0(closure_2[9]).Avatar, obj12);
                            tmp13Result = tmp3(tmp4, obj11, arg1);
                          }
                          return;
                        }
                      }
                      if (tmp17Result) {
                        let items1 = [,];
                        class O {
                          constructor(arg0, arg1) {
                            if (arg1 >= max) {
                              return;
                            } else {
                              num3 = 1;
                              if (arg1 === tmp - 1) {
                                num = 0;
                                if (closure_3 > 0) {
                                  items = [,];
                                  items[0] = closure_4.wrapper;
                                  obj1 = 0 !== arg1;
                                  tmp13 = jsx;
                                  tmp14 = View;
                                  tmp15 = closure_4;
                                  if (obj1) {
                                    obj1 = { marginLeft: -12 };
                                  }
                                  obj8 = { style: null, children: null };
                                  items[1] = obj1;
                                  obj8.style = items;
                                  tmp16 = jsx;
                                  tmp17 = View;
                                  obj9 = { style: null, children: null };
                                  obj9.style = tmp15.overflowCircle;
                                  tmp18 = jsx;
                                  tmp19 = closure_0;
                                  tmp20 = closure_2;
                                  obj10 = { variant: "text-xs/medium", children: null };
                                  tmp21 = globalThis;
                                  _HermesInternal = HermesInternal;
                                  str = "+";
                                  Text = closure_0(closure_2[8]).Text;
                                  obj10.children = "+" + tmp2 + 1;
                                  obj9.children = jsx(Text, obj10);
                                  obj8.children = jsx(View, obj9);
                                  str2 = "overflow";
                                  tmp13Result = tmp13(tmp14, obj8, "overflow");
                                }
                                return tmp13Result;
                              }
                              tmp5 = closure_4;
                              items1 = [,];
                              items1[0] = closure_4.wrapper;
                              num2 = 0;
                              obj = 0 !== arg1;
                              tmp3 = jsx;
                              tmp4 = View;
                              if (obj) {
                                obj = { marginLeft: -12 };
                              }
                              tmp6 = arg0;
                              obj11 = { style: null, children: null };
                              items1[1] = obj;
                              obj11.style = items1;
                              tmp7 = jsx;
                              tmp8 = closure_0;
                              tmp9 = closure_2;
                              obj12 = { user: null, guildId: null, size: null };
                              obj12.user = arg0;
                              tmp10 = guildId;
                              obj12.guildId = guildId;
                              tmp11 = closure_2;
                              obj12.size = closure_2.voiceOrStageSummaryRow.avatarSize;
                              obj11.children = jsx(closure_0(closure_2[9]).Avatar, obj12);
                              tmp13Result = tmp3(tmp4, obj11, arg1);
                            }
                            return;
                          }
                        }
                        let obj4 = { style: items1, children: closure_5(bound, obj5) };
                        const tmp19 = users.length > 0 && { marginLeft: -12 };
                        items1[1] = tmp19;
                        obj5 = { style: items2, children: items3 };
                        items2 = [,];
                        ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp7);
                        let obj6 = {
                          size: guildId(1188).Icon.Sizes.CUSTOM,
                          style: { height: 14, width: 14 },
                          source: num(16848),
                        };
                        const Icon = guildId(1188).Icon;
                        items3 = [closure_4(Icon, obj6)];
                        let obj7 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
                        items3[1] = closure_4(guildId(4892).Text, obj7);
                        tmp17Result = closure_4(bound, obj4);
                      }
                      cResult[22] = audienceCount;
                      cResult[23] = tmp7.audienceBadge;
                      cResult[24] = tmp7.badge;
                      cResult[25] = tmp7.wrapper;
                      cResult[26] = users.length;
                      cResult[27] = tmp17Result;
                      tmp14 = tmp17Result;
                    }
                  }
                }
              }
            }
          }
          if (cResult[15] === guildId) {
            if (cResult[16] === tmp4.voiceOrStageSummaryRow.avatarSize) {
              if (cResult[17] === num) {
                if (cResult[18] === bound) {
                  if (cResult[19] === tmp7.overflowCircle) {
                    let tmp12;
                    if (cResult[20] === tmp7.wrapper) {
                      tmp12 = cResult[21];
                    }
                    const mapped = users.map(tmp12);
                    class O {
                      constructor(arg0, arg1) {
                        if (arg1 >= max) {
                          return;
                        } else {
                          num3 = 1;
                          if (arg1 === tmp - 1) {
                            num = 0;
                            if (closure_3 > 0) {
                              items = [,];
                              items[0] = closure_4.wrapper;
                              obj1 = 0 !== arg1;
                              tmp13 = jsx;
                              tmp14 = View;
                              tmp15 = closure_4;
                              if (obj1) {
                                obj1 = { marginLeft: -12 };
                              }
                              obj8 = { style: null, children: null };
                              items[1] = obj1;
                              obj8.style = items;
                              tmp16 = jsx;
                              tmp17 = View;
                              obj9 = { style: null, children: null };
                              obj9.style = tmp15.overflowCircle;
                              tmp18 = jsx;
                              tmp19 = closure_0;
                              tmp20 = closure_2;
                              obj10 = { variant: "text-xs/medium", children: null };
                              tmp21 = globalThis;
                              _HermesInternal = HermesInternal;
                              str = "+";
                              Text = closure_0(closure_2[8]).Text;
                              obj10.children = "+" + tmp2 + 1;
                              obj9.children = jsx(Text, obj10);
                              obj8.children = jsx(View, obj9);
                              str2 = "overflow";
                              tmp13Result = tmp13(tmp14, obj8, "overflow");
                            }
                            return tmp13Result;
                          }
                          tmp5 = closure_4;
                          items1 = [,];
                          items1[0] = closure_4.wrapper;
                          num2 = 0;
                          obj = 0 !== arg1;
                          tmp3 = jsx;
                          tmp4 = View;
                          if (obj) {
                            obj = { marginLeft: -12 };
                          }
                          tmp6 = arg0;
                          obj11 = { style: null, children: null };
                          items1[1] = obj;
                          obj11.style = items1;
                          tmp7 = jsx;
                          tmp8 = closure_0;
                          tmp9 = closure_2;
                          obj12 = { user: null, guildId: null, size: null };
                          obj12.user = arg0;
                          tmp10 = guildId;
                          obj12.guildId = guildId;
                          tmp11 = closure_2;
                          obj12.size = closure_2.voiceOrStageSummaryRow.avatarSize;
                          obj11.children = jsx(closure_0(closure_2[9]).Avatar, obj12);
                          tmp13Result = tmp3(tmp4, obj11, arg1);
                        }
                        return;
                      }
                    }
                    cResult[8] = tmp4.voiceOrStageSummaryRow.avatarSize;
                    cResult[9] = num;
                    cResult[10] = bound;
                    cResult[11] = tmp7.overflowCircle;
                    cResult[12] = tmp7.wrapper;
                    cResult[13] = users;
                    cResult[14] = mapped;
                    tmp11 = mapped;
                  }
                }
              }
            }
          }
          class O {
            constructor(arg0, arg1) {
              if (arg1 >= max) {
                return;
              } else {
                num3 = 1;
                if (arg1 === tmp - 1) {
                  num = 0;
                  if (closure_3 > 0) {
                    items = [,];
                    items[0] = closure_4.wrapper;
                    obj1 = 0 !== arg1;
                    tmp13 = jsx;
                    tmp14 = View;
                    tmp15 = closure_4;
                    if (obj1) {
                      obj1 = { marginLeft: -12 };
                    }
                    obj8 = { style: null, children: null };
                    items[1] = obj1;
                    obj8.style = items;
                    tmp16 = jsx;
                    tmp17 = View;
                    obj9 = { style: null, children: null };
                    obj9.style = tmp15.overflowCircle;
                    tmp18 = jsx;
                    tmp19 = closure_0;
                    tmp20 = closure_2;
                    obj10 = { variant: "text-xs/medium", children: null };
                    tmp21 = globalThis;
                    _HermesInternal = HermesInternal;
                    str = "+";
                    Text = closure_0(closure_2[8]).Text;
                    obj10.children = "+" + tmp2 + 1;
                    obj9.children = jsx(Text, obj10);
                    obj8.children = jsx(View, obj9);
                    str2 = "overflow";
                    tmp13Result = tmp13(tmp14, obj8, "overflow");
                  }
                  return tmp13Result;
                }
                tmp5 = closure_4;
                items1 = [,];
                items1[0] = closure_4.wrapper;
                num2 = 0;
                obj = 0 !== arg1;
                tmp3 = jsx;
                tmp4 = View;
                if (obj) {
                  obj = { marginLeft: -12 };
                }
                tmp6 = arg0;
                obj11 = { style: null, children: null };
                items1[1] = obj;
                obj11.style = items1;
                tmp7 = jsx;
                tmp8 = closure_0;
                tmp9 = closure_2;
                obj12 = { user: null, guildId: null, size: null };
                obj12.user = arg0;
                tmp10 = guildId;
                obj12.guildId = guildId;
                tmp11 = closure_2;
                obj12.size = closure_2.voiceOrStageSummaryRow.avatarSize;
                obj11.children = jsx(closure_0(closure_2[9]).Avatar, obj12);
                tmp13Result = tmp3(tmp4, obj11, arg1);
              }
              return;
            }
          }
          cResult[15] = guildId;
          cResult[16] = tmp4.voiceOrStageSummaryRow.avatarSize;
          cResult[17] = num;
          cResult[18] = bound;
          cResult[19] = tmp7.overflowCircle;
          cResult[20] = tmp7.wrapper;
          cResult[21] = O;
          tmp12 = O;
        }
        const items4 = [tmp7.container, tmp9];
        cResult[4] = tmp7.container;
        cResult[5] = tmp9;
        cResult[6] = items4;
        tmp10 = items4;
      }
    : (layout) => {
        let audienceCount;
        let guildId;
        let items;
        let items1;
        let items3;
        let items4;
        let max;
        let obj5;
        let users;
        ({ users, max } = layout);
        if (max === undefined) {
          max = 5;
        }
        ({ guildId: importDefault, audienceCount } = layout);
        let layoutStyles;
        const tmp = max;
        const tmp2 = layoutStyles;
        layout = layout.layout;
        let obj = max(layoutStyles[7]);
        layoutStyles = obj.getLayoutStyles(layout);
        size = layoutStyles.voiceOrStageSummaryRow.size;
        let closure_3 = Math.max(users.length - max, 0);
        const tmp4 = closure_6(size);
        let closure_4 = tmp4;
        let obj2 = { style: items, children: items1 };
        items = [tmp4.container];
        let obj3 = { height: size + 4 };
        items[1] = obj3;
        items1 = [
          users.map((user, index) => {
            let Text;
            let obj4;
            let obj5;
            let obj7;
            if (index < max) {
              if (index === tmp - 1) {
                let tmp3Result;
                if (closure_3 > 0) {
                  const items = [closure_4.wrapper];
                  const obj2 = 0 !== index && { marginLeft: -12 };
                  items[1] = obj2;
                  const obj3 = { style: items, children: React3(View, obj4) };
                  obj4 = { style: closure_4.overflowCircle, children: React3(Text, obj5) };
                  const _HermesInternal = HermesInternal;
                  obj5 = { variant: "text-xs/medium", children: "+" + tmp2 + 1 };
                  Text = Text_Text.Text;
                  tmp3Result = React3(View, obj3, "overflow");
                }
                return tmp3Result;
              }
              const items1 = [closure_4.wrapper];
              const obj = 0 !== index && { marginLeft: -12 };
              items1[1] = obj;
              const obj6 = { style: items1, children: React3(native.Avatar, obj7) };
              obj7 = { user, guildId: importDefault, size: layoutStyles.voiceOrStageSummaryRow.avatarSize };
              tmp3Result = React3(View, obj6, index);
            }
          }),
        ];
        let tmp8Result = null != audienceCount && audienceCount > 0;
        if (tmp8Result) {
          const items2 = [tmp4.wrapper];
          let obj4 = { style: items2, children: closure_5(tmp6, obj5) };
          const tmp9 = users.length > 0 && { marginLeft: -12 };
          items2[1] = tmp9;
          obj5 = { style: items3, children: items4 };
          items3 = [,];
          ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
          let obj6 = {
            size: tmp(tmp2[9]).Icon.Sizes.CUSTOM,
            style: { height: 14, width: 14 },
            source: require("AssetRegistry"),
          };
          const Icon = tmp(tmp2[9]).Icon;
          items4 = [closure_4(Icon, obj6)];
          let obj7 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
          items4[1] = closure_4(tmp(tmp2[8]).Text, obj7);
          tmp8Result = tmp8(tmp6, obj4);
        }
        items1[1] = tmp8Result;
        return closure_5(closure_3, obj2);
      },
);
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx",
);

export default memoResult;
