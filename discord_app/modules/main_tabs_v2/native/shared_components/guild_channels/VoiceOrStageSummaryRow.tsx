// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles((height) => {
  const obj = {
    container: { flexDirection: "row", alignItems: "center", marginLeft: -2 },
    overflowCircle: null,
    wrapper: null,
    badge: null,
    audienceBadge: null,
  };
  const size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height,
    width: height,
  };
  obj.overflowCircle = size;
  obj.wrapper = {
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
  };
  const obj2 = {
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
  };
  obj.badge = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  const obj3 = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  obj.audienceBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceOrStageSummaryRow(arg0) {
        const cResult = guildId(avatarSize[6]).c(32);
        ({ users, max, guildId } = arg0);
        ({ layout, audienceCount } = arg0);
        let num = 5;
        if (undefined !== max) {
          num = max;
        }
        if (cResult[0] !== layout) {
          const layoutStyles = guildId(tmp2[7]).getLayoutStyles(layout);
          cResult[0] = layout;
          cResult[1] = layoutStyles;
          avatarSize = layoutStyles;
          const tmpResult = guildId(tmp2[7]);
        } else {
          avatarSize = cResult[1];
        }
        const size = avatarSize.voiceOrStageSummaryRow.size;
        wrapper = Math.max(users.length - num, 0);
        const tmp5 = closure_6(size);
        closure_4 = tmp5;
        const sum = size + 4;
        if (cResult[2] !== sum) {
          let obj2 = { height: sum };
          cResult[2] = sum;
          cResult[3] = obj2;
          let tmp7 = obj2;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp5.container) {
          if (cResult[5] === tmp7) {
            let tmp8 = cResult[6];
          }
          if (cResult[7] === guildId) {
            if (cResult[8] === avatarSize.voiceOrStageSummaryRow.avatarSize) {
              if (cResult[9] === num) {
                if (cResult[10] === wrapper) {
                  if (cResult[11] === tmp5.overflowCircle) {
                    if (cResult[12] === tmp5.wrapper) {
                      if (cResult[13] === users) {
                        if (cResult[22] === audienceCount) {
                          if (cResult[23] === tmp5.audienceBadge) {
                            if (cResult[24] === tmp5.badge) {
                              if (cResult[25] === tmp5.wrapper) {
                                if (cResult[26] === users.length) {
                                  let tmp13 = cResult[27];
                                }
                                if (cResult[28] === tmp8) {
                                  if (cResult[29] === tmp9) {
                                    if (cResult[30] === tmp13) {
                                      let tmp21 = cResult[31];
                                    }
                                    return tmp21;
                                  }
                                }
                                class C {
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
                                          obj10.children = "+" + tmp2 + 1;
                                          obj9.children = jsx(closure_0(closure_2[8]).Text, obj10);
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
                                let obj3 = { style: tmp8, children: null };
                                let items = [tmp9, tmp13];
                                obj3.children = items;
                                const tmp23 = closure_5(wrapper, obj3);
                                cResult[28] = tmp8;
                                cResult[29] = tmp9;
                                cResult[30] = tmp13;
                                cResult[31] = tmp23;
                                tmp21 = tmp23;
                              }
                            }
                          }
                        }
                        class C {
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
                                  obj10.children = "+" + tmp2 + 1;
                                  obj9.children = jsx(closure_0(closure_2[8]).Text, obj10);
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
                        if (tmp16Result) {
                          let items1 = [,];
                          class C {
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
                                    obj10.children = "+" + tmp2 + 1;
                                    obj9.children = jsx(closure_0(closure_2[8]).Text, obj10);
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
                          let obj4 = { style: null, children: null };
                          items1[1] = users.length > 0 && { marginLeft: -12 };
                          obj4.style = items1;
                          let obj5 = { style: null, children: null };
                          const items2 = [,];
                          ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp5);
                          obj5.style = items2;
                          let obj6 = {
                            size: guildId(tmp2[9]).Icon.Sizes.CUSTOM,
                            style: { height: 14, width: 14 },
                            source: num(tmp2[10]),
                          };
                          const items3 = [closure_4(guildId(tmp2[9]).Icon, obj6)];
                          let obj7 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
                          items3[1] = closure_4(guildId(tmp2[8]).Text, obj7);
                          obj5.children = items3;
                          obj4.children = closure_5(wrapper, obj5);
                          tmp16Result = closure_4(wrapper, obj4);
                          const tmp18 = users.length > 0 && { marginLeft: -12 };
                        }
                        cResult[22] = audienceCount;
                        cResult[23] = tmp5.audienceBadge;
                        cResult[24] = tmp5.badge;
                        cResult[25] = tmp5.wrapper;
                        cResult[26] = users.length;
                        cResult[27] = tmp16Result;
                        tmp13 = tmp16Result;
                      }
                    }
                  }
                }
              }
            }
          }
          if (cResult[15] === guildId) {
            if (cResult[16] === avatarSize.voiceOrStageSummaryRow.avatarSize) {
              if (cResult[17] === num) {
                if (cResult[18] === wrapper) {
                  if (cResult[19] === tmp5.overflowCircle) {
                    if (cResult[20] === tmp5.wrapper) {
                      let tmp10 = cResult[21];
                    }
                    const mapped = users.map(tmp10);
                    class C {
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
                              obj10.children = "+" + tmp2 + 1;
                              obj9.children = jsx(closure_0(closure_2[8]).Text, obj10);
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
                    avatarSize = avatarSize.voiceOrStageSummaryRow.avatarSize;
                    cResult[8] = avatarSize;
                    cResult[9] = num;
                    cResult[10] = wrapper;
                    ({ overflowCircle: tmp3[11], wrapper } = tmp5);
                    cResult[12] = wrapper;
                    cResult[13] = users;
                    cResult[14] = mapped;
                  }
                }
              }
            }
          }
          class C {
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
                    obj10.children = "+" + tmp2 + 1;
                    obj9.children = jsx(closure_0(closure_2[8]).Text, obj10);
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
          cResult[16] = avatarSize.voiceOrStageSummaryRow.avatarSize;
          cResult[17] = num;
          cResult[18] = wrapper;
          cResult[19] = tmp5.overflowCircle;
          cResult[20] = tmp5.wrapper;
          cResult[21] = C;
          tmp10 = C;
        }
        const items4 = [tmp5.container, tmp7];
        cResult[4] = tmp5.container;
        cResult[5] = tmp7;
        cResult[6] = items4;
        tmp8 = items4;
        let obj = guildId(avatarSize[6]);
      }
    : function VoiceOrStageSummaryRow(layout) {
        ({ users, max } = layout);
        if (max === undefined) {
          max = 5;
        }
        ({ guildId: importDefault, audienceCount } = layout);
        let layoutStyles;
        layoutStyles = max(layoutStyles[7]).getLayoutStyles(layout.layout);
        const size = layoutStyles.voiceOrStageSummaryRow.size;
        closure_3 = Math.max(users.length - max, 0);
        const tmp4 = closure_6(size);
        closure_4 = tmp4;
        let obj2 = { style: null, children: null };
        let items = [tmp4.container, { height: size + 4 }];
        obj2.style = items;
        let items1 = [
          users.map((user, index) => {
            if (index < max) {
              if (index === tmp - 1) {
                if (closure_3 > 0) {
                  const items = [closure_4.wrapper];
                  let obj2 = 0 !== index;
                  if (obj2) {
                    obj2 = { marginLeft: -12 };
                  }
                  const obj3 = { style: null, children: null };
                  items[1] = obj2;
                  obj3.style = items;
                  const obj4 = { style: closure_4.overflowCircle, children: null };
                  const obj5 = { variant: "text-xs/medium", children: null };
                  const _HermesInternal = HermesInternal;
                  obj5.children = "+" + tmp2 + 1;
                  obj4.children = React4(Text_Text.Text, obj5);
                  obj3.children = React4(View, obj4);
                  let tmp3Result = React4(View, obj3, "overflow");
                }
                return tmp3Result;
              }
              const items1 = [closure_4.wrapper];
              let obj = 0 !== index;
              if (obj) {
                obj = { marginLeft: -12 };
              }
              const obj6 = { style: null, children: null };
              items1[1] = obj;
              obj6.style = items1;
              const obj7 = { user, guildId, size: layoutStyles.voiceOrStageSummaryRow.avatarSize };
              obj6.children = React4(native.Avatar, obj7);
              tmp3Result = React4(View, obj6, index);
            }
          }),
        ];
        let tmp8Result = null != audienceCount && audienceCount > 0;
        if (tmp8Result) {
          const items2 = [tmp4.wrapper];
          let obj4 = { style: null, children: null };
          items2[1] = users.length > 0 && { marginLeft: -12 };
          obj4.style = items2;
          let obj5 = { style: null, children: null };
          const items3 = [,];
          ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
          obj5.style = items3;
          let obj6 = {
            size: tmp(tmp2[9]).Icon.Sizes.CUSTOM,
            style: { height: 14, width: 14 },
            source: require("../../../../../../_runtime/metro/17277__.js"),
          };
          const items4 = [closure_4(tmp(tmp2[9]).Icon, obj6)];
          let obj7 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
          items4[1] = closure_4(tmp(tmp2[8]).Text, obj7);
          obj5.children = items4;
          obj4.children = closure_5(tmp6, obj5);
          tmp8Result = tmp8(tmp6, obj4);
          const tmp9 = users.length > 0 && { marginLeft: -12 };
        }
        items1[1] = tmp8Result;
        obj2.children = items1;
        return closure_5(closure_3, obj2);
      },
);
