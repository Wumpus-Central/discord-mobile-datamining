// discord_app/modules/guild_scheduled_events/native/components/StartEventModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import _modDef6774 from "../../../../../_runtime/metro/06774__.js";
import GuildEventCardDefault from "GuildEventCard.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const GuildScheduledEventsConstants = fn(2070);
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: c10 } =
  GuildScheduledEventsConstants);
const START_EVENT_MODAL_KEY = fn(8498).START_EVENT_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  mainContainer: {
    flex: 1,
    padding: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  container: { flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" },
  headerContainer: null,
  footerContainer: null,
  header: null,
  headerTitle: null,
  buttonContainer: null,
  previewCard: null,
  headerPrivacyLevel: null,
};
let obj3 = { flex: 1, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.headerContainer = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
obj2.footerContainer = { display: "flex", flexDirection: "column" };
let obj4 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_24 };
obj2.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj2.headerTitle = { lineHeight: 24, textAlign: "center" };
let obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj2.buttonContainer = {
  display: "flex",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_16,
};
let obj6 = {
  display: "flex",
  flexDirection: "column",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_16,
};
obj2.previewCard = {
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 16,
  shadowOffset: { height: 8, width: 0 },
};
obj2.headerPrivacyLevel = { textAlign: "center", lineHeight: 18 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NavigationBar(onClose) {
      const cResult = c.c(6);
      onClose = onClose.onClose;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.cpT0Cq);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onClose) {
        const fn = function o() {
          return onClose();
        };
        cResult[1] = onClose;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { source: _modDef6774 };
        const tmp10 = __initData(native.Icon, obj2);
        cResult[3] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp6) {
        const obj3 = { children: null };
        const obj4 = { accessibilityRole: "button", accessibilityLabel: first, onPress: tmp6, children: tmp7 };
        obj3.children = __initData(Pressables.PressableOpacity, obj4);
        const tmp14 = __initData(View, obj3);
        cResult[4] = tmp6;
        cResult[5] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[5];
      }
      return tmp11;
    }
  : function NavigationBar(onClose) {
      onClose = onClose.onClose;
      const obj = { children: null };
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
      obj2.onPress = function onPress() {
        return onClose();
      };
      obj2.children = __initData(native.Icon, { source: _modDef6774 });
      obj.children = __initData(Pressables.PressableOpacity, obj2);
      return __initData(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StartEventHeader(event) {
      const cResult = c.c(10);
      event = event.event;
      const tmp4 = closure_14();
      ({ header, headerPrivacyLevel } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["q+fFJv"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.headerPrivacyLevel) {
        const obj2 = {
          style: headerPrivacyLevel,
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          children: first,
        };
        const tmp9 = __initData(Text_Text.Text, obj2);
        cResult[1] = tmp4.headerPrivacyLevel;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === event.name) {
        if (cResult[4] === tmp4.headerTitle) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4.header) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp10) {
              let tmp12 = cResult[9];
            }
            return tmp12;
          }
        }
        const obj3 = { style: header, children: null };
        const items = [tmp7, tmp10];
        obj3.children = items;
        const tmp15 = __initData2(View, obj3);
        cResult[6] = tmp4.header;
        cResult[7] = tmp7;
        cResult[8] = tmp10;
        cResult[9] = tmp15;
        tmp12 = tmp15;
      }
      const tmp11 = __initData(Text_Text.Text, {
        style: tmp4.headerTitle,
        variant: "text-md/medium",
        color: "text-default",
        children: event.name,
      });
      cResult[3] = event.name;
      cResult[4] = tmp4.headerTitle;
      cResult[5] = tmp11;
      tmp10 = tmp11;
      const obj4 = { style: tmp4.headerTitle, variant: "text-md/medium", color: "text-default", children: event.name };
    }
  : function StartEventHeader(children) {
      const tmp = closure_14();
      const obj = { style: tmp.header, children: null };
      const obj2 = {
        style: tmp.headerPrivacyLevel,
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t["q+fFJv"]);
      const items = [
        __initData(Text_Text.Text, obj2),
        __initData(Text_Text.Text, {
          style: tmp.headerTitle,
          variant: "text-md/medium",
          color: "text-default",
          children: children.event.name,
        }),
      ];
      obj.children = items;
      return __initData2(View, obj);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PreviewEventCard(event) {
      const cResult = c.c(3);
      event = event.event;
      const tmp3 = closure_14();
      if (cResult[0] === event) {
        if (cResult[1] === tmp3.previewCard) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const tmp5 = __initData(GuildEventCardDefault, {
        event,
        hideControls: true,
        style: tmp3.previewCard,
        hideAgeVerificationNotice: true,
      });
      cResult[0] = event;
      cResult[1] = tmp3.previewCard;
      cResult[2] = tmp5;
      tmp4 = tmp5;
      const obj2 = { event, hideControls: true, style: tmp3.previewCard, hideAgeVerificationNotice: true };
    }
  : function PreviewEventCard(event) {
      const tmp = closure_14();
      return __initData(GuildEventCardDefault, {
        event: event.event,
        hideControls: true,
        style: closure_14().previewCard,
        hideAgeVerificationNotice: true,
      });
    };
let closure_17 = tmp4;
ReactCompilerGating = fn(558);
let obj7 = {
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 16,
  shadowOffset: { height: 8, width: 0 },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/StartEventModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StartEventModal(event) {
      const cResult = require("c").c(58);
      event = event.event;
      _require = event;
      const onCloseActionSheet = event.onCloseActionSheet;
      const tmp4 = closure_14();
      guild_id = event.guild_id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild_id) {
        const fn = function f() {
          return GuildStore.getGuild(guild_id);
        };
        cResult[1] = guild_id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [closure_7];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== event.channel_id) {
        const fn2 = function w() {
          return ChannelStore.getChannel(channel_id.channel_id);
        };
        cResult[4] = event.channel_id;
        cResult[5] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== event) {
        const items2 = [event];
        cResult[6] = event;
        cResult[7] = items2;
        let tmp12 = items2;
      } else {
        tmp12 = cResult[7];
      }
      const tmpResult = require("initialize");
      let stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp11, tmp12);
      const tmpResult3 = require("initialize");
      if (stateFromStores1 == null) {
        stateFromStores1 = stateFromStores;
      }
      const canManageGuildEvent =
        require("useManageResourcePermissions").useManageResourcePermissions(stateFromStores1).canManageGuildEvent;
      if (cResult[8] === canManageGuildEvent) {
        if (cResult[9] === event) {
          let tmp14 = cResult[10];
        }
        asyncGeneratorStep = tmp14;
        const tmp20 = first1(noop.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
        first1 = tmp20[0];
        noop = tmp20[1];
        const tmp23 = first1(onCloseActionSheet(tmp2[22])(), 2);
        const first2 = tmp23[0];
        ({ loading, error } = tmp23[1]);
        if (cResult[11] !== onCloseActionSheet) {
          function onCloseModal(arg0) {
            ModalActionCreatorsDefault.popWithKey(START_EVENT_MODAL_KEY);
            if (onCloseActionSheet != null) {
              onCloseActionSheet(tmp);
            }
          }
          cResult[11] = onCloseActionSheet;
          cResult[12] = onCloseModal;
          let tmp25 = onCloseModal;
        } else {
          tmp25 = cResult[12];
        }
        closure_7 = tmp25;
        if (cResult[13] === tmp14) {
          if (cResult[14] === event) {
            if (cResult[15] === first1) {
              if (cResult[16] === tmp25) {
                if (cResult[17] === first2) {
                  let tmp26 = cResult[18];
                }
                const _Symbol = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  function handleToggleNotifyMembers() {
                    closure_5((arg0) => !arg0);
                  }
                  cResult[19] = handleToggleNotifyMembers;
                  let tmp28 = handleToggleNotifyMembers;
                } else {
                  tmp28 = cResult[19];
                }
                if (cResult[20] !== tmp25) {
                  let obj2 = { onClose: tmp25 };
                  const tmp32 = closure_12(closure_15, obj2);
                  cResult[20] = tmp25;
                  cResult[21] = tmp32;
                  let tmp29 = tmp32;
                } else {
                  tmp29 = cResult[21];
                }
                if (cResult[22] !== event) {
                  let obj3 = { event };
                  const tmp37 = closure_12(closure_16, obj3);
                  let obj4 = { event };
                  const tmp39 = closure_12(closure_17, obj4);
                  cResult[22] = event;
                  cResult[23] = tmp37;
                  cResult[24] = tmp39;
                  let tmp34 = tmp39;
                  let tmp33 = tmp37;
                } else {
                  tmp33 = cResult[23];
                  tmp34 = cResult[24];
                }
                if (cResult[25] === tmp4.headerContainer) {
                  if (cResult[26] === tmp33) {
                    if (cResult[27] === tmp34) {
                      let tmp40 = cResult[28];
                    }
                    if (cResult[29] === event.channel_id) {
                      if (cResult[30] === event.entity_type) {
                        let tmp45 = cResult[31];
                      }
                      if (cResult[32] === first1) {
                        if (cResult[33] === tmp17) {
                          let tmp49 = cResult[34];
                        }
                        if (cResult[35] !== error) {
                          let tmp53 = null;
                          if (null != error) {
                            let obj5 = {
                              variant: "text-sm/medium",
                              color: "text-feedback-critical",
                              children: error.getAnyErrorMessage(),
                            };
                            tmp53 = closure_12(tmp(tmp2[18]).Text, obj5);
                          }
                          cResult[35] = error;
                          cResult[36] = tmp53;
                          let tmp52 = tmp53;
                        } else {
                          tmp52 = cResult[36];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = tmp(tmp2[14]).intl;
                          const stringResult = intl.string(tmp(tmp2[14]).t.cK1GGY);
                          cResult[37] = stringResult;
                          let tmp55 = stringResult;
                        } else {
                          tmp55 = cResult[37];
                        }
                        if (cResult[38] === tmp26) {
                          if (cResult[39] === loading) {
                            let tmp57 = cResult[40];
                          }
                          if (cResult[41] === tmp4.buttonContainer) {
                            if (cResult[42] === tmp52) {
                              if (cResult[43] === tmp57) {
                                let tmp60 = cResult[44];
                              }
                              if (cResult[45] === tmp4.footerContainer) {
                                if (cResult[46] === tmp45) {
                                  if (cResult[47] === tmp49) {
                                    if (cResult[48] === tmp60) {
                                      let tmp64 = cResult[49];
                                    }
                                    if (cResult[50] === tmp4.container) {
                                      if (cResult[51] === tmp40) {
                                        if (cResult[52] === tmp64) {
                                          let tmp68 = cResult[53];
                                        }
                                        if (cResult[54] === tmp4.mainContainer) {
                                          if (cResult[55] === tmp29) {
                                            if (cResult[56] === tmp68) {
                                              let tmp72 = cResult[57];
                                            }
                                            return tmp72;
                                          }
                                        }
                                        const rect = {
                                          top: true,
                                          bottom: true,
                                          style: tmp4.mainContainer,
                                          children: null,
                                        };
                                        const items3 = [tmp29, tmp68];
                                        rect.children = items3;
                                        const tmp74 = closure_13(tmp(tmp2[26]).SafeAreaPaddingView, rect);
                                        cResult[54] = tmp4.mainContainer;
                                        cResult[55] = tmp29;
                                        cResult[56] = tmp68;
                                        cResult[57] = tmp74;
                                        tmp72 = tmp74;
                                      }
                                    }
                                    const obj6 = { style: tmp4.container, children: null };
                                    const items4 = [tmp40, tmp64];
                                    obj6.children = items4;
                                    const tmp71 = closure_13(first2, obj6);
                                    cResult[50] = tmp4.container;
                                    cResult[51] = tmp40;
                                    cResult[52] = tmp64;
                                    cResult[53] = tmp71;
                                    tmp68 = tmp71;
                                  }
                                }
                              }
                              const obj7 = { style: tmp44, children: null };
                              const items5 = [tmp45, tmp49, tmp60];
                              obj7.children = items5;
                              const tmp67 = closure_13(first2, obj7);
                              cResult[45] = tmp4.footerContainer;
                              cResult[46] = tmp45;
                              cResult[47] = tmp49;
                              cResult[48] = tmp60;
                              cResult[49] = tmp67;
                              tmp64 = tmp67;
                            }
                          }
                          const obj8 = { style: tmp4.buttonContainer, children: null };
                          const items6 = [tmp52, tmp57];
                          obj8.children = items6;
                          const tmp63 = closure_13(first2, obj8);
                          cResult[41] = tmp4.buttonContainer;
                          cResult[42] = tmp52;
                          cResult[43] = tmp57;
                          cResult[44] = tmp63;
                          tmp60 = tmp63;
                        }
                        const obj9 = { variant: "active", text: tmp55, onPress: tmp26, disabled: loading, loading };
                        const tmp59 = closure_12(tmp(tmp2[25]).Button, obj9);
                        cResult[38] = tmp26;
                        cResult[39] = loading;
                        cResult[40] = tmp59;
                        tmp57 = tmp59;
                      }
                      let tmp50 = null;
                      if (tmp17) {
                        const obj10 = { sendStartNotification: first1, onToggle: tmp28 };
                        tmp50 = closure_12(tmp(tmp2[24]).NotificationToggle, obj10);
                      }
                      cResult[32] = first1;
                      cResult[33] = tmp17;
                      cResult[34] = tmp50;
                      tmp49 = tmp50;
                    }
                    let hasItem = set.has(event.entity_type);
                    if (hasItem) {
                      const obj11 = { channelId: event.channel_id };
                      hasItem = closure_12(tmp22(tmp2[23]), obj11);
                    }
                    cResult[29] = event.channel_id;
                    cResult[30] = event.entity_type;
                    cResult[31] = hasItem;
                    tmp45 = hasItem;
                  }
                }
                const obj12 = { style: tmp4.headerContainer, children: null };
                const items7 = [tmp33, tmp34];
                obj12.children = items7;
                const tmp43 = closure_13(first2, obj12);
                cResult[25] = tmp4.headerContainer;
                cResult[26] = tmp33;
                cResult[27] = tmp34;
                cResult[28] = tmp43;
                tmp40 = tmp43;
              }
            }
          }
        }
        _require = asyncGeneratorStep(async () => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else if (closure_1_3) {
                  const obj4 = {
                    onSuccess() {
                      return closure_1_7(true);
                    },
                  };
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: first2(c0, first1, obj4), done: false };
                  return obj5;
                } else {
                  closure_1_7(false);
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp11) {
              c0 = tmp;
              throw tmp11;
            }
          }
        });
        function handleStart() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[13] = tmp14;
        cResult[14] = event;
        cResult[15] = first1;
        cResult[16] = tmp25;
        cResult[17] = first2;
        cResult[18] = handleStart;
        tmp26 = handleStart;
        tmp22 = onCloseActionSheet;
      }
      const canManageGuildEventResult = canManageGuildEvent(event);
      cResult[8] = canManageGuildEvent;
      cResult[9] = event;
      cResult[10] = canManageGuildEventResult;
      tmp14 = canManageGuildEventResult;
      const tmpResult4 = require("useManageResourcePermissions");
    }
  : function StartEventModal(event) {
      event = event.event;
      const onCloseActionSheet = event.onCloseActionSheet;
      closure_3 = undefined;
      let sendStartNotification;
      noop = undefined;
      c6 = undefined;
      function onCloseModal() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        ModalActionCreatorsDefault.popWithKey(START_EVENT_MODAL_KEY);
        if (onCloseActionSheet != null) {
          onCloseActionSheet(flag);
        }
      }
      closure_8 = async function _handleStart2() {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else if (asyncGeneratorStep) {
                const obj4 = {
                  onSuccess() {
                    c1(closure_2_2[11]).popWithKey(closure_2_11);
                    if (closure_1_1 != null) {
                      tmp2(true);
                    }
                  },
                };
                c1 = 1;
                c0 = 1;
                const obj5 = { value: View(event, sendStartNotification, obj4), done: false };
                return obj5;
              } else {
                onCloseModal(false);
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp11) {
            c0 = tmp;
            throw tmp11;
          }
        }
      };
      const tmp = closure_14();
      const guild_id = event.guild_id;
      const items = [closure_8];
      const stateFromStores = event(guild_id[20]).useStateFromStores(items, () => GuildStore.getGuild(guild_id));
      let obj = event(guild_id[20]);
      const items1 = [onCloseModal];
      const items2 = [event];
      let stateFromStores1 = event(guild_id[20]).useStateFromStores(
        items1,
        () => ChannelStore.getChannel(event.channel_id),
        items2,
      );
      let obj2 = event(guild_id[20]);
      if (stateFromStores1 == null) {
        stateFromStores1 = stateFromStores;
      }
      closure_3 = event(guild_id[21]).useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
      const tmp7 = sendStartNotification(noop.useState(event.entity_type === constants.STAGE_INSTANCE), 2);
      sendStartNotification = tmp7[0];
      noop = tmp7[1];
      let obj3 = event(guild_id[21]);
      const tmp9 = onCloseActionSheet;
      [c6, tmp11] = sendStartNotification(onCloseActionSheet(guild_id[22])(), 2);
      ({ loading, error } = tmp11);
      const rect = { top: true, bottom: true, style: tmp.mainContainer, children: null };
      const items3 = [closure_12(closure_15, { onClose: onCloseModal })];
      let obj4 = { style: tmp.container, children: null };
      let obj5 = { style: tmp.headerContainer, children: null };
      const items4 = [closure_12(closure_16, { event }), closure_12(closure_17, { event })];
      obj5.children = items4;
      const items5 = [closure_13(c6, obj5)];
      const obj6 = { style: tmp.footerContainer, children: null };
      let hasItem = set.has(event.entity_type);
      if (hasItem) {
        const obj7 = { channelId: event.channel_id };
        hasItem = closure_12(tmp9(tmp3[23]), obj7);
      }
      const items6 = [hasItem, ,];
      let tmp13Result = null;
      if (event.entity_type === constants.STAGE_INSTANCE) {
        const obj8 = {
          sendStartNotification,
          onToggle: function handleToggleNotifyMembers() {
            closure_5((arg0) => !arg0);
          },
        };
        tmp13Result = closure_12(tmp2(tmp3[24]).NotificationToggle, obj8);
      }
      items6[1] = tmp13Result;
      const obj9 = { style: tmp.buttonContainer, children: null };
      let tmp13Result2 = null;
      if (null != error) {
        const obj10 = {
          variant: "text-sm/medium",
          color: "text-feedback-critical",
          children: error.getAnyErrorMessage(),
        };
        tmp13Result2 = closure_12(tmp2(tmp3[18]).Text, obj10);
      }
      const items7 = [tmp13Result2];
      const obj11 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
      const intl = tmp2(tmp3[14]).intl;
      obj11.text = intl.string(event(guild_id[14]).t.cK1GGY);
      obj11.onPress = function handleStart() {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj11.disabled = loading;
      obj11.loading = loading;
      items7[1] = closure_12(event(guild_id[25]).Button, obj11);
      obj9.children = items7;
      items6[2] = closure_13(c6, obj9);
      obj6.children = items6;
      items5[1] = closure_13(c6, obj6);
      obj4.children = items5;
      items3[1] = closure_13(c6, obj4);
      rect.children = items3;
      return closure_13(event(guild_id[26]).SafeAreaPaddingView, rect);
    };
export const PreviewEventCard = tmp4;
