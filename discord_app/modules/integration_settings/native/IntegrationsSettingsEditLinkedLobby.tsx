// discord_app/modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { screenContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, header: { alignItems: "center", marginTop: 8, marginBottom: 32, gap: 12 }, divider: null };
let size = { height: 1, width: 48, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj2.divider = size;
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditLinkedLobby(channel) {
  const cResult = channel(navigation[7]).c(47);
  channel = channel.channel;
  const numScreensToPop = channel.numScreensToPop;
  let obj = channel(navigation[7]);
  const token = channel(navigation[8]).useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
  const tmp6 = closure_9();
  const obj2 = channel(navigation[8]);
  navigation = channel(navigation[9]).useNavigation();
  const obj3 = channel(navigation[9]);
  const analyticsLocations = numScreensToPop(navigation[10])(numScreensToPop(navigation[11]).EDIT_CHANNEL_SYNCING).analyticsLocations;
  const tmp8 = numScreensToPop(navigation[10]);
  let linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(navigation[12]).useGetOrFetchApplication(application_id);
  const tmp11 = numScreensToPop(navigation[13])(channel, true);
  const linkedLobby2 = channel.linkedLobby;
  if (linkedLobby2 != null) {
    const linked_at = linkedLobby2.linked_at;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [onPress];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  const linkedLobby3 = channel.linkedLobby;
  let linked_by;
  if (linkedLobby3 != null) {
    linked_by = linkedLobby3.linked_by;
  }
  if (cResult[1] !== linked_by) {
    const linkedLobby4 = channel.linkedLobby;
    let linked_by1;
    if (linkedLobby4 != null) {
      linked_by1 = linkedLobby4.linked_by;
    }
    const fn = function h() {
      const linkedLobby = channel.linkedLobby;
      let linked_by;
      if (linkedLobby != null) {
        linked_by = linkedLobby.linked_by;
      }
      return UserStore.getUser(linked_by);
    };
    cResult[1] = linked_by1;
    cResult[2] = fn;
    let tmp15 = fn;
  } else {
    tmp15 = cResult[2];
  }
  const obj4 = channel(navigation[12]);
  const stateFromStores = channel(navigation[14]).useStateFromStores(first, tmp15);
  if (cResult[3] === navigation) {
    if (cResult[4] === numScreensToPop) {
      let tmp18 = cResult[5];
    }
    let str;
    if (getOrFetchApplication != null) {
      str = getOrFetchApplication.name;
    }
    if (str == null) {
      str = "";
    }
    const tmp4ResultResult = tmp4(tmp2[15])(channel.id, str, tmp18);
    if (cResult[6] === analyticsLocations) {
      if (cResult[7] === channel.id) {
        if (cResult[8] === stateFromStores) {
          let tmp21 = cResult[9];
        }
        onPress = tmp21;
        if (null == linked_at) {
          if (null == getOrFetchApplication) {
            return null;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { paddingTop: 16 };
              cResult[14] = obj5;
              let tmp31 = obj5;
            } else {
              tmp31 = cResult[14];
            }
            if (cResult[15] !== token) {
              const obj6 = { paddingHorizontal: token };
              cResult[15] = token;
              cResult[16] = obj6;
              let tmp32 = obj6;
            } else {
              tmp32 = cResult[16];
            }
            if (cResult[17] === getOrFetchApplication.icon) {
              if (cResult[18] === getOrFetchApplication.id) {
                let tmp34 = cResult[19];
              }
              if (cResult[20] !== tmp34) {
                const obj7 = { source: tmp34, size: tmp(tmp2[20]).AvatarSizes.XXLARGE };
                const tmp38 = closure_6(tmp(tmp2[20]).Avatar, obj7);
                cResult[20] = tmp34;
                class E {
                  constructor() {
                    if (null != closure_4) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                      obj.userId = tmp.id;
                      tmp4 = channel;
                      obj.channelId = channel.id;
                      tmp5 = analyticsLocations;
                      obj.sourceAnalyticsLocations = analyticsLocations;
                      tmp6 = closure_1(closure_2[16])(obj);
                    }
                    return;
                  }
                }
                cResult[21] = tmp38;
                let tmp36 = tmp38;
              } else {
                tmp36 = cResult[21];
              }
              if (cResult[22] !== getOrFetchApplication.name) {
                const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: getOrFetchApplication.name };
                cResult[22] = getOrFetchApplication.name;
                cResult[23] = closure_6(tmp(tmp2[18]).Text, obj8);
                class E {
                  constructor() {
                    if (null != closure_4) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                      obj.userId = tmp.id;
                      tmp4 = channel;
                      obj.channelId = channel.id;
                      tmp5 = analyticsLocations;
                      obj.sourceAnalyticsLocations = analyticsLocations;
                      tmp6 = closure_1(closure_2[16])(obj);
                    }
                    return;
                  }
                }
                const tmp41 = closure_6(tmp(tmp2[18]).Text, obj8);
              }
              if (cResult[24] === null) {
                if (cResult[25] === tmp6.divider) {
                  let tmp42 = cResult[26];
                }
                if (cResult[27] === tmp6.header) {
                  if (cResult[28] === tmp36) {
                    if (cResult[29] === tmp39) {
                      if (cResult[30] === tmp42) {
                        let tmp48 = cResult[31];
                      }
                      if (cResult[32] !== tmp11) {
                        const intl3 = tmp(tmp2[17]).intl;
                        const obj9 = { channelName: tmp11 };
                        cResult[32] = tmp11;
                        class E {
                          constructor() {
                            if (null != closure_4) {
                              tmp2 = closure_1;
                              tmp3 = closure_2;
                              obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                              obj.userId = tmp.id;
                              tmp4 = channel;
                              obj.channelId = channel.id;
                              tmp5 = analyticsLocations;
                              obj.sourceAnalyticsLocations = analyticsLocations;
                              tmp6 = closure_1(closure_2[16])(obj);
                            }
                            return;
                          }
                        }
                        let tmp52 = intl3.format(tmp(tmp2[17]).t.DA9v5F, obj9);
                        const formatResult = intl3.format(tmp(tmp2[17]).t.DA9v5F, obj9);
                      } else {
                        tmp52 = cResult[33];
                      }
                      if (cResult[34] !== tmp52) {
                        const obj10 = { variant: "text-sm/normal", color: "text-default", children: tmp52 };
                        cResult[34] = tmp52;
                        cResult[35] = closure_6(tmp(tmp2[18]).Text, obj10);
                        class E {
                          constructor() {
                            if (null != closure_4) {
                              tmp2 = closure_1;
                              tmp3 = closure_2;
                              obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                              obj.userId = tmp.id;
                              tmp4 = channel;
                              obj.channelId = channel.id;
                              tmp5 = analyticsLocations;
                              obj.sourceAnalyticsLocations = analyticsLocations;
                              tmp6 = closure_1(closure_2[16])(obj);
                            }
                            return;
                          }
                        }
                        const tmp56 = closure_6(tmp(tmp2[18]).Text, obj10);
                      }
                      const _Symbol = Symbol;
                      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = tmp(tmp2[17]).intl;
                        const stringResult = intl4.string(tmp(tmp2[17]).t.LLWaxQ);
                        cResult[36] = stringResult;
                        let tmp57 = stringResult;
                      } else {
                        tmp57 = cResult[36];
                      }
                      if (cResult[37] !== tmp4ResultResult) {
                        const obj11 = { hasIcons: false, children: null };
                        const obj12 = { label: tmp57, variant: "danger", onPress: tmp4ResultResult };
                        obj11.children = closure_6(tmp(tmp2[22]).TableRow, obj12);
                        const tmp61 = closure_6(tmp(tmp2[21]).TableRowGroup, obj11);
                        class E {
                          constructor() {
                            if (null != closure_4) {
                              tmp2 = closure_1;
                              tmp3 = closure_2;
                              obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                              obj.userId = tmp.id;
                              tmp4 = channel;
                              obj.channelId = channel.id;
                              tmp5 = analyticsLocations;
                              obj.sourceAnalyticsLocations = analyticsLocations;
                              tmp6 = closure_1(closure_2[16])(obj);
                            }
                            return;
                          }
                        }
                        cResult[37] = tmp4ResultResult;
                        cResult[38] = tmp61;
                        let tmp59 = tmp61;
                      } else {
                        tmp59 = cResult[38];
                      }
                      if (cResult[39] === tmp48) {
                        if (cResult[40] === tmp54) {
                          if (cResult[41] === tmp59) {
                            if (cResult[42] === tmp32) {
                              let tmp62 = cResult[43];
                            }
                            if (cResult[44] === tmp6.screenContainer) {
                              if (cResult[45] === tmp62) {
                                let tmp64 = cResult[46];
                              }
                              return tmp64;
                            }
                            const obj13 = { style: tmp6.screenContainer, contentContainerStyle: tmp31, children: tmp62 };
                            const tmp66 = closure_6(tmp(tmp2[24]).Form, obj13);
                            class E {
                              constructor() {
                                if (null != closure_4) {
                                  tmp2 = closure_1;
                                  tmp3 = closure_2;
                                  obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                                  obj.userId = tmp.id;
                                  tmp4 = channel;
                                  obj.channelId = channel.id;
                                  tmp5 = analyticsLocations;
                                  obj.sourceAnalyticsLocations = analyticsLocations;
                                  tmp6 = closure_1(closure_2[16])(obj);
                                }
                                return;
                              }
                            }
                            cResult[44] = tmp6.screenContainer;
                            cResult[45] = tmp62;
                            cResult[46] = tmp66;
                            tmp64 = tmp66;
                          }
                        }
                      }
                      class E {
                        constructor() {
                          if (null != closure_4) {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                            obj.userId = tmp.id;
                            tmp4 = channel;
                            obj.channelId = channel.id;
                            tmp5 = analyticsLocations;
                            obj.sourceAnalyticsLocations = analyticsLocations;
                            tmp6 = closure_1(closure_2[16])(obj);
                          }
                          return;
                        }
                      }
                      const obj14 = { spacing: tmp4(tmp2[5]).space.PX_24, style: tmp32, children: null };
                      const items1 = [tmp48, tmp54, tmp59];
                      obj14.children = items1;
                      const tmp63 = closure_8(tmp(tmp2[23]).Stack, obj14);
                      cResult[39] = tmp48;
                      cResult[40] = tmp54;
                      cResult[41] = tmp59;
                      cResult[42] = tmp32;
                      cResult[43] = tmp63;
                      tmp62 = tmp63;
                    }
                  }
                }
                const obj15 = { style: tmp33, children: null };
                const items2 = [tmp36, , ];
                class E {
                  constructor() {
                    if (null != closure_4) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                      obj.userId = tmp.id;
                      tmp4 = channel;
                      obj.channelId = channel.id;
                      tmp5 = analyticsLocations;
                      obj.sourceAnalyticsLocations = analyticsLocations;
                      tmp6 = closure_1(closure_2[16])(obj);
                    }
                    return;
                  }
                }
                items2[2] = tmp42;
                obj15.children = items2;
                const tmp51 = closure_8(stateFromStores, obj15);
                cResult[27] = tmp6.header;
                cResult[28] = tmp36;
                cResult[29] = tmp39;
                cResult[30] = tmp42;
                cResult[31] = tmp51;
                tmp48 = tmp51;
              }
              let tmp43 = null != null;
              if (tmp43) {
                const obj16 = { children: null };
                { style: null }.style = tmp6.divider;
                const items3 = [, ];
                class E {
                  constructor() {
                    if (null != closure_4) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                      obj.userId = tmp.id;
                      tmp4 = channel;
                      obj.channelId = channel.id;
                      tmp5 = analyticsLocations;
                      obj.sourceAnalyticsLocations = analyticsLocations;
                      tmp6 = closure_1(closure_2[16])(obj);
                    }
                    return;
                  }
                }
                const obj18 = { variant: "text-sm/medium", color: "text-subtle", children: null };
                items3[1] = closure_6(tmp(tmp2[18]).Text, obj18);
                obj16.children = items3;
                tmp43 = closure_8(closure_7, obj16);
                const obj17 = { style: null };
              }
              cResult[24] = null;
              class E {
                constructor() {
                  if (null != closure_4) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                    obj.userId = tmp.id;
                    tmp4 = channel;
                    obj.channelId = channel.id;
                    tmp5 = analyticsLocations;
                    obj.sourceAnalyticsLocations = analyticsLocations;
                    tmp6 = closure_1(closure_2[16])(obj);
                  }
                  return;
                }
              }
              cResult[25] = tmp6.divider;
              cResult[26] = tmp43;
              tmp42 = tmp43;
            }
            const obj19 = { id: null, icon: null };
            class E {
              constructor() {
                if (null != closure_4) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                  obj.userId = tmp.id;
                  tmp4 = channel;
                  obj.channelId = channel.id;
                  tmp5 = analyticsLocations;
                  obj.sourceAnalyticsLocations = analyticsLocations;
                  tmp6 = closure_1(closure_2[16])(obj);
                }
                return;
              }
            }
            obj19.icon = getOrFetchApplication.icon;
            const applicationIconSource = tmp4(tmp2[19]).getApplicationIconSource(obj19);
            cResult[17] = getOrFetchApplication.icon;
            cResult[18] = getOrFetchApplication.id;
            cResult[19] = applicationIconSource;
            tmp34 = applicationIconSource;
            const tmp4Result2 = tmp4(tmp2[19]);
          }
        } else {
          const _Date = Date;
          const date = new Date(linked_at);
          if (null != stateFromStores) {
            const intl2 = tmp(tmp2[17]).intl;
            const obj20 = {
              username: stateFromStores.username,
              usernameHook(children, arg1) {
                          return timestampProducer(Text_Text.Text, { onPress, variant: "text-sm/semibold", color: "text-strong", children }, arg1);
                        },
              linkedAtDate: date
            };
            let formatResult1 = intl2.format(tmp(tmp2[17]).t.uV2AkA, obj20);
          } else {
            const intl = tmp(tmp2[17]).intl;
            const obj21 = { linkedAtDate: date };
            formatResult1 = intl.formatToPlainString(tmp(tmp2[17]).t.EyygeM, obj21);
          }
          class E {
            constructor() {
              if (null != closure_4) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
                obj.userId = tmp.id;
                tmp4 = channel;
                obj.channelId = channel.id;
                tmp5 = analyticsLocations;
                obj.sourceAnalyticsLocations = analyticsLocations;
                tmp6 = closure_1(closure_2[16])(obj);
              }
              return;
            }
          }
          cResult[10] = linked_at;
          cResult[11] = stateFromStores;
          cResult[12] = tmp21;
          cResult[13] = formatResult1;
        }
      }
    }
    class E {
      constructor() {
        if (null != closure_4) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
          obj.userId = tmp.id;
          tmp4 = channel;
          obj.channelId = channel.id;
          tmp5 = analyticsLocations;
          obj.sourceAnalyticsLocations = analyticsLocations;
          tmp6 = closure_1(closure_2[16])(obj);
        }
        return;
      }
    }
    cResult[6] = analyticsLocations;
    cResult[7] = channel.id;
    cResult[8] = stateFromStores;
    cResult[9] = E;
    tmp21 = E;
    const tmp4Result = tmp4(tmp2[15]);
  }
  const fn2 = function f() {
    navigation.pop(numScreensToPop);
  };
  cResult[3] = navigation;
  cResult[4] = numScreensToPop;
  cResult[5] = fn2;
  tmp18 = fn2;
  const tmpResult = channel(navigation[14]);
}) : (function EditLinkedLobby(channel) {
  channel = channel.channel;
  const numScreensToPop = channel.numScreensToPop;
  let navigation;
  let linked_at;
  let stateFromStores;
  let callback1;
  const token = channel(navigation[8]).useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_9();
  let obj = channel(navigation[8]);
  navigation = channel(navigation[9]).useNavigation();
  let obj2 = channel(navigation[9]);
  const analyticsLocations = numScreensToPop(navigation[10])(numScreensToPop(navigation[11]).EDIT_CHANNEL_SYNCING).analyticsLocations;
  const tmp7 = numScreensToPop(navigation[10]);
  let linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(navigation[12]).useGetOrFetchApplication(application_id);
  const linkedLobby2 = channel.linkedLobby;
  linked_at = undefined;
  const obj3 = channel(navigation[12]);
  if (linkedLobby2 != null) {
    linked_at = linkedLobby2.linked_at;
  }
  const tmp10 = numScreensToPop(navigation[13])(channel, true);
  const items = [stateFromStores];
  stateFromStores = channel(navigation[14]).useStateFromStores(items, () => {
    const linkedLobby = channel.linkedLobby;
    let linked_by;
    if (linkedLobby != null) {
      linked_by = linkedLobby.linked_by;
    }
    return UserStore.getUser(linked_by);
  });
  const items1 = [navigation, numScreensToPop];
  const callback = analyticsLocations.useCallback(() => {
    navigation.pop(numScreensToPop);
  }, items1);
  let str;
  const tmpResult = channel(navigation[14]);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const items2 = [stateFromStores, analyticsLocations, channel.id];
  const tmp3Result = numScreensToPop(navigation[15]);
  callback1 = obj5.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { userId: tmp.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items2);
  const items3 = [linked_at, stateFromStores, callback1];
  const memo = obj5.useMemo(() => {
    if (null == linked_at) {
      return null;
    } else {
      const _Date = Date;
      const date = new Date(linked_at);
      if (null != stateFromStores) {
        const intl2 = util.intl;
        const obj2 = {
          username: tmp17.username,
          usernameHook(children, arg1) {
                return callback1(channel(navigation[18]).Text, { onPress, variant: "text-sm/semibold", color: "text-strong", children }, arg1);
              },
          linkedAtDate: date
        };
        let formatResult = intl2.format(util.t.uV2AkA, obj2);
      } else {
        const intl = util.intl;
        const obj = { linkedAtDate: date };
        formatResult = intl.formatToPlainString(util.t.EyygeM, obj);
      }
      return formatResult;
    }
  }, items3);
  let tmp19Result = null;
  if (null != getOrFetchApplication) {
    const obj4 = { style: tmp5.screenContainer, contentContainerStyle: { paddingTop: 16 }, children: null };
    const obj6 = { spacing: tmp3(tmp2[5]).space.PX_24, style: null, children: null };
    const obj7 = { paddingHorizontal: token };
    obj6.style = obj7;
    const obj8 = { style: tmp5.header, children: null };
    const obj9 = { source: null, size: null };
    ({ id: obj12.id, icon: obj12.icon } = getOrFetchApplication);
    obj9.source = tmp3(tmp2[19]).getApplicationIconSource({ id: null, icon: null });
    obj9.size = tmp(tmp2[20]).AvatarSizes.XXLARGE;
    const items4 = [callback1(tmp(tmp2[20]).Avatar, obj9), , ];
    const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: getOrFetchApplication.name };
    items4[1] = callback1(tmp(tmp2[18]).Text, obj11);
    let tmp20Result = null != memo;
    if (tmp20Result) {
      const obj13 = { children: null };
      const obj14 = { style: tmp5.divider };
      const items5 = [tmp19(tmp21, obj14), ];
      const obj15 = { variant: "text-sm/medium", color: "text-subtle", children: memo };
      items5[1] = tmp19(tmp(tmp2[18]).Text, obj15);
      obj13.children = items5;
      tmp20Result = closure_8(closure_7, obj13);
    }
    items4[2] = tmp20Result;
    obj8.children = items4;
    const items6 = [closure_8(linked_at, obj8), , ];
    const obj16 = { variant: "text-sm/normal", color: "text-default", children: null };
    let intl = tmp(tmp2[17]).intl;
    const obj17 = { channelName: tmp10 };
    obj16.children = intl.format(tmp(tmp2[17]).t.DA9v5F, obj17);
    items6[1] = callback1(tmp(tmp2[18]).Text, obj16);
    const obj18 = { hasIcons: false, children: null };
    const obj19 = { label: null, variant: "danger", onPress: null };
    let intl2 = tmp(tmp2[17]).intl;
    obj19.label = intl2.string(tmp(tmp2[17]).t.LLWaxQ);
    obj19.onPress = tmp3ResultResult;
    obj18.children = callback1(tmp(tmp2[22]).TableRow, obj19);
    items6[2] = callback1(tmp(tmp2[21]).TableRowGroup, obj18);
    obj6.children = items6;
    obj4.children = closure_8(tmp(tmp2[23]).Stack, obj6);
    tmp19Result = tmp19(tmp(tmp2[24]).Form, obj4);
    const obj10 = { id: null, icon: null };
    const tmp3Result2 = tmp3(tmp2[19]);
  }
  return tmp19Result;
});