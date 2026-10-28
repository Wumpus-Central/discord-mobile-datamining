// === Module 12411: ConjureVoiceChannelPinCard ===

// Module 12411 (ConjureVoiceChannelPinCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5246 */;
import Text_Text from "Text/Text" /* 5270 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12226 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12243 */;
import useConjureVoiceChannelPin from "useConjureVoiceChannelPin" /* 12412 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4878 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = "conjure-voice-channel-pin";
const createStyles = fn(5004);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, actions: null };
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.actions = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { flexDirection: "row", justifyContent: "flex-end", gap: nativeDefault.space.PX_8 };
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureVoiceChannelPinForm(projectId) {
  const cResult = guild(selected[9]).c(35);
  const tmp4 = closure_11();
  let obj = guild(selected[9]);
  const conjureVoiceChannelPinForm = guild(selected[10]).useConjureVoiceChannelPinForm(projectId.projectId);
  ({ guildId, channels } = conjureVoiceChannelPinForm);
  selected = conjureVoiceChannelPinForm.selected;
  const setPicked = conjureVoiceChannelPinForm.setPicked;
  ({ pinning, failed, pin, skip } = conjureVoiceChannelPinForm);
  if (cResult[0] === guildId) {
    if (cResult[1] === selected) {
      guild = cResult[2];
      let tmp7 = cResult[3];
    }
    if (cResult[4] === channels) {
      if (cResult[5] === tmp6) {
        if (cResult[6] === selected) {
          if (cResult[7] === setPicked) {
            let tmp11 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            let obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
            let intl = tmp(tmp2[12]).intl;
            obj3.children = intl.string(channels(tmp2[13])["1vVBAw"]);
            const tmp16 = closure_7(tmp(tmp2[11]).Text, obj3);
            cResult[9] = tmp16;
            let tmp13 = tmp16;
          } else {
            tmp13 = cResult[9];
          }
          if (cResult[10] === channels.length) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === pinning) {
                if (cResult[13] === selected) {
                  if (cResult[14] === tmp7) {
                    if (cResult[16] !== failed) {
                      let tmp30 = null;
                      if (failed) {
                        let obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
                        const intl4 = tmp(tmp2[12]).intl;
                        obj4.children = intl4.string(channels(tmp2[13]).d7EeAm);
                        tmp30 = closure_7(tmp(tmp2[11]).Text, obj4);
                      }
                      cResult[16] = failed;
                      cResult[17] = tmp30;
                      let tmp29 = tmp30;
                    } else {
                      tmp29 = cResult[17];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl5 = tmp(tmp2[12]).intl;
                      const stringResult = intl5.string(channels(tmp2[13]).Iw0l8o);
                      cResult[18] = stringResult;
                      let tmp33 = stringResult;
                    } else {
                      tmp33 = cResult[18];
                    }
                    if (cResult[19] === pinning) {
                      if (cResult[20] === skip) {
                        let tmp36 = cResult[21];
                      }
                      if (cResult[22] === channels.length) {
                        if (cResult[23] === pin) {
                          if (cResult[24] === pinning) {
                            if (cResult[25] === selected) {
                              let tmp39 = cResult[26];
                            }
                            if (cResult[27] === tmp4.actions) {
                              if (cResult[28] === tmp36) {
                                if (cResult[29] === tmp39) {
                                  let tmp44 = cResult[30];
                                }
                                if (cResult[31] === tmp44) {
                                  if (cResult[32] === tmp17) {
                                    if (cResult[33] === tmp29) {
                                      let tmp48 = cResult[34];
                                    }
                                    return tmp48;
                                  }
                                }
                                const obj5 = { children: null };
                                const items = [tmp13, tmp17, tmp29, tmp44];
                                obj5.children = items;
                                const tmp51 = closure_8(closure_9, obj5);
                                cResult[31] = tmp44;
                                cResult[32] = tmp17;
                                cResult[33] = tmp29;
                                cResult[34] = tmp51;
                                tmp48 = tmp51;
                              }
                            }
                            const obj6 = { style: tmp4.actions, children: null };
                            const items1 = [tmp36, tmp39];
                            obj6.children = items1;
                            const tmp47 = closure_8(setPicked, obj6);
                            cResult[27] = tmp4.actions;
                            cResult[28] = tmp36;
                            cResult[29] = tmp39;
                            cResult[30] = tmp47;
                            tmp44 = tmp47;
                          }
                        }
                      }
                      let tmp41 = null;
                      if (channels.length > 0) {
                        const obj7 = { variant: "primary", size: "sm", text: null, disabled: null, loading: null, onPress: null };
                        const intl6 = tmp(tmp2[12]).intl;
                        obj7.text = intl6.string(channels(tmp2[13]).FYI3qr);
                        obj7.disabled = null == selected;
                        obj7.loading = pinning;
                        obj7.onPress = pin;
                        tmp41 = closure_7(tmp(tmp2[22]).Button, obj7);
                      }
                      cResult[22] = channels.length;
                      cResult[23] = pin;
                      cResult[24] = pinning;
                      cResult[25] = selected;
                      cResult[26] = tmp41;
                      tmp39 = tmp41;
                    }
                    const obj8 = { variant: "secondary", size: "sm", text: tmp33, disabled: pinning, onPress: skip };
                    const tmp38 = closure_7(tmp(tmp2[22]).Button, obj8);
                    cResult[19] = pinning;
                    cResult[20] = skip;
                    cResult[21] = tmp38;
                    tmp36 = tmp38;
                  }
                }
              }
            }
          }
          if (channels.length > 0) {
            const obj9 = { hasIcons: null != tmp7, children: null };
            if (null == selected) {
              const intl3 = tmp(tmp2[12]).intl;
              let stringResult1 = intl3.string(channels(tmp2[13])["9+dfPT"]);
            } else {
              stringResult1 = tmp(tmp2[20]).computeChannelName(selected, UserStore, RelationshipStore);
              const tmpResult = tmp(tmp2[20]);
            }
            const obj10 = { label: stringResult1, icon: null, arrow: true, disabled: null, onPress: null };
            let tmp21Result;
            if (null != tmp7) {
              const obj11 = { source: tmp7 };
              tmp21Result = closure_7(tmp(tmp2[21]).TableRowIcon, obj11);
            }
            obj10.icon = tmp21Result;
            obj10.disabled = pinning;
            obj10.onPress = tmp11;
            obj9.children = closure_7(tmp(tmp2[19]).TableRow, obj10);
            let tmp21Result2 = closure_7(tmp(tmp2[18]).TableRowGroup, obj9);
          } else {
            const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const intl2 = tmp(tmp2[12]).intl;
            obj12.children = intl2.string(channels(tmp2[13]).JVUsIY);
            tmp21Result2 = closure_7(tmp(tmp2[11]).Text, obj12);
          }
          cResult[10] = channels.length;
          cResult[11] = tmp11;
          cResult[12] = pinning;
          cResult[13] = selected;
          cResult[14] = tmp7;
          cResult[15] = tmp21Result2;
        }
      }
    }
    function openPicker() {
      const obj2 = { content: null, key: null, stackingBehavior: "stack" };
      const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
      const obj4 = { title: null };
      const obj = ActionSheetActionCreators;
      const intl = util.intl;
      obj4.title = intl.string(_modDef3863.peOi1H);
      obj3.header = obj4;
      obj3.guild = guild;
      obj3.channels = channels;
      obj3.selectedChannel = selected;
      obj3.onSelect = function onSelect(id) {
        return setPicked(id.id);
      };
      obj2.content = React5(ChannelPickerActionSheetDefault, obj3);
      obj2.key = key;
      obj.showActionSheet(obj2);
    }
    cResult[4] = channels;
    cResult[5] = tmp6;
    cResult[6] = selected;
    cResult[7] = setPicked;
    cResult[8] = openPicker;
    tmp11 = openPicker;
  }
  guild = undefined;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let channelIconWithGuild = null;
  if (null != selected) {
    channelIconWithGuild = tmp(tmp2[15]).getChannelIconWithGuild(selected, guild);
    const tmpResult2 = tmp(tmp2[15]);
  }
  cResult[0] = guildId;
  cResult[1] = selected;
  cResult[2] = guild;
  cResult[3] = channelIconWithGuild;
  tmp7 = channelIconWithGuild;
  let obj2 = guild(selected[10]);
}) : (function ConjureVoiceChannelPinForm(projectId) {
  channels = undefined;
  dependencyMap = undefined;
  const tmp = closure_11();
  const conjureVoiceChannelPinForm = channels(12412).useConjureVoiceChannelPinForm(projectId.projectId);
  ({ guildId, channels } = conjureVoiceChannelPinForm);
  const selected = conjureVoiceChannelPinForm.selected;
  ({ setPicked: c2, pinning } = conjureVoiceChannelPinForm);
  guild = undefined;
  ({ failed, pin, skip } = conjureVoiceChannelPinForm);
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let channelIconWithGuild = null;
  if (null != selected) {
    channelIconWithGuild = tmp2(8539).getChannelIconWithGuild(selected, guild);
    const tmp2Result = tmp2(8539);
  }
  let obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
  let intl = tmp2(1125).intl;
  obj2.children = intl.string(selected(3863)["1vVBAw"]);
  const items = [closure_7(channels(5270).Text, obj2), , , ];
  if (channels.length > 0) {
    let obj3 = { hasIcons: null != channelIconWithGuild, children: null };
    if (null == selected) {
      const intl3 = tmp2(1125).intl;
      let stringResult = intl3.string(tmp11(3863)["9+dfPT"]);
    } else {
      stringResult = tmp2(5640).computeChannelName(selected, UserStore, RelationshipStore);
      const tmp2Result2 = tmp2(5640);
    }
    let obj4 = { label: stringResult, icon: null, arrow: true, disabled: null, onPress: null };
    let tmp10Result;
    if (null != channelIconWithGuild) {
      const obj5 = { source: channelIconWithGuild };
      tmp10Result = closure_7(tmp2(6947).TableRowIcon, obj5);
    }
    obj4.icon = tmp10Result;
    obj4.disabled = pinning;
    obj4.onPress = function openPicker() {
      const obj2 = { content: null, key: null, stackingBehavior: "stack" };
      const obj3 = { header: null, guild: null, channels: null, selectedChannel: null, onSelect: null };
      const obj4 = { title: null };
      const obj = ActionSheetActionCreators;
      const intl = util.intl;
      obj4.title = intl.string(_modDef3863.peOi1H);
      obj3.header = obj4;
      obj3.guild = guild;
      obj3.channels = channels;
      obj3.selectedChannel = selected;
      obj3.onSelect = function onSelect(id) {
        return closure_1_2(id.id);
      };
      obj2.content = React5(ChannelPickerActionSheetDefault, obj3);
      obj2.key = key;
      obj.showActionSheet(obj2);
    };
    obj3.children = closure_7(tmp2(6939).TableRow, obj4);
    let tmp10Result4 = closure_7(tmp2(7023).TableRowGroup, obj3);
  } else {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp2(1125).intl;
    obj6.children = intl2.string(tmp11(3863).JVUsIY);
    tmp10Result4 = closure_7(tmp2(5270).Text, obj6);
  }
  items[1] = tmp10Result4;
  let tmp10Result5 = null;
  if (failed) {
    const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    const intl4 = tmp2(1125).intl;
    obj7.children = intl4.string(tmp11(3863).d7EeAm);
    tmp10Result5 = closure_7(tmp2(5270).Text, obj7);
  }
  items[2] = tmp10Result5;
  const obj8 = { style: tmp.actions, children: null };
  const obj9 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
  const intl5 = tmp2(1125).intl;
  obj9.text = intl5.string(selected(3863).Iw0l8o);
  obj9.disabled = pinning;
  obj9.onPress = skip;
  const items1 = [closure_7(channels(5280).Button, obj9), ];
  let tmp10Result6 = null;
  if (channels.length > 0) {
    const obj10 = { variant: "primary", size: "sm", text: null, disabled: null, loading: null, onPress: null };
    const intl6 = tmp2(1125).intl;
    obj10.text = intl6.string(tmp11(3863).FYI3qr);
    obj10.disabled = null == selected;
    obj10.loading = pinning;
    obj10.onPress = pin;
    tmp10Result6 = closure_7(tmp2(5280).Button, obj10);
  }
  const obj11 = { children: null };
  items1[1] = tmp10Result6;
  obj8.children = items1;
  items[3] = closure_8(guild, obj8);
  obj11.children = items;
  return closure_8(closure_9, obj11);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/native/ConjureVoiceChannelPinCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureVoiceChannelPinCard(projectId) {
  let tmp2 = dependencyMap;
  const cResult = c.c(14);
  projectId = projectId.projectId;
  let card = closure_11();
  const conjureVoiceChannelPinOutcome = useConjureVoiceChannelPin.useConjureVoiceChannelPinOutcome(projectId);
  ({ outcome, pinnedName } = conjureVoiceChannelPinOutcome);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(_modDef3863.UGAfl9);
    const tmp8 = React5(Text_Text.Text, obj3);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (null != outcome) {
    if (cResult[1] === outcome.status) {
      if (cResult[2] === pinnedName) {
        if (cResult[4] !== cResult[3]) {
          const obj4 = { variant: "text-sm/normal", color: "text-default", children: tmp17 };
          const tmp24 = React5(Text_Text.Text, obj4);
          cResult[4] = tmp17;
          cResult[5] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[5];
        }
        if (cResult[6] === card.card) {
        }
        const obj5 = { style: card.card, children: null };
        const items = [first, tmp22];
        obj5.children = items;
        tmp2 = closure_1_8(ConjureNativeCardSurfaceDefault, obj5);
        card = card.card;
        cResult[6] = card;
        cResult[7] = tmp22;
        cResult[8] = tmp2;
      }
    }
    if ("pinned" === outcome.status) {
      const intl3 = util.intl;
      let str2 = pinnedName;
      if (pinnedName == null) {
        str2 = "";
      }
      const obj6 = { channelName: str2 };
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef3863.gKe6Lw, obj6);
    } else {
      const intl2 = util.intl;
      formatToPlainStringResult = intl2.string(_modDef3863["+kpQ3v"]);
    }
    outcome = outcome.status;
    cResult[1] = outcome;
    cResult[2] = pinnedName;
    cResult[3] = formatToPlainStringResult;
  } else {
    if (cResult[9] !== projectId) {
      const obj7 = { projectId };
      const tmp12 = React5(closure_12, obj7);
      cResult[9] = projectId;
      cResult[10] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[10];
    }
    if (cResult[11] === card.card) {
      if (cResult[12] === tmp9) {
        let tmp13 = cResult[13];
      }
      return tmp13;
    }
    const obj8 = { style: card.card, children: null };
    const items1 = [first, tmp9];
    obj8.children = items1;
    const tmp16 = closure_1_8(ConjureNativeCardSurfaceDefault, obj8);
    cResult[11] = card.card;
    cResult[12] = tmp9;
    cResult[13] = tmp16;
    tmp13 = tmp16;
  }
}) : (function ConjureVoiceChannelPinCard(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_11();
  let intl = require;
  let tmp4Result = dependencyMap;
  const conjureVoiceChannelPinOutcome = useConjureVoiceChannelPin.useConjureVoiceChannelPinOutcome(projectId);
  ({ outcome, pinnedName } = conjureVoiceChannelPinOutcome);
  const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl2 = util.intl;
  let gKe6Lw = importDefault;
  obj2.children = intl2.string(_modDef3863.UGAfl9);
  const tmp5 = React5(Text_Text.Text, obj2);
  if (null != outcome) {
    const obj3 = { style: tmp.card, children: null };
    const items = [tmp5, ];
    if ("pinned" === outcome.status) {
      intl = util.intl;
      gKe6Lw = _modDef3863.gKe6Lw;
      if (pinnedName == null) {
        pinnedName = "";
      }
      const obj4 = { channelName: pinnedName };
      let formatToPlainStringResult = intl.formatToPlainString(gKe6Lw, obj4);
    } else {
      const intl3 = util.intl;
      formatToPlainStringResult = intl3.string(_modDef3863["+kpQ3v"]);
    }
    const obj5 = { variant: "text-sm/normal", color: "text-default", children: formatToPlainStringResult };
    tmp4Result = React5(Text_Text.Text, obj5);
    items[1] = tmp4Result;
    obj3.children = items;
  } else {
    const obj6 = { style: tmp.card, children: null };
    const items1 = [tmp5, ];
    const obj7 = { projectId };
    items1[1] = React5(closure_12, obj7);
    obj6.children = items1;
    return closure_1_8(tmp7, obj6);
  }
});