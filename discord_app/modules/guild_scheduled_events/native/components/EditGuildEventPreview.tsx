// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import ScheduleUtils from "../../utils/ScheduleUtils.tsx";
import EditGuildEventUtils from "../../utils/EditGuildEventUtils.tsx";
import guildEventDetailsParser from "../../guildEventDetailsParser.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, event;

let items;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const Fonts = Constants.Fonts;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  centered: { flexDirection: "column", alignItems: "center", justifyContent: "center" },
  centerContainer: { flexGrow: 0, width: "100%" },
  flex: { flex: 1, overflow: "visible" },
  header: { alignItems: "center", paddingBottom: 24 },
  headerTitle: { marginTop: 16, marginBottom: 8 },
  headerSubtitle: { textAlign: "center" },
  eventContainer: obj3,
  channelContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 14 },
  channelIcon: obj4,
  buttonContainer: { position: "absolute", bottom: 16, left: 0, right: 0 },
  error: obj5,
};
obj2 = {
  flex: 1,
  padding: 16,
  paddingBottom: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "column",
  height: "100%",
  overflow: "visible",
};
createStyles = createStyles.createStyles;
obj3 = {
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginBottom: 24,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.sm,
  shadowOpacity: 0.2,
  elevation: 2,
  shadowRadius: 16,
  shadowOffset: { height: 8, width: 0 },
  overflow: "visible",
};
obj4 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4, height: 14, transform: items };
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
items = [{ translateY: num }];
obj5 = {
  paddingBottom: 8,
  fontSize: 14,
  fontFamily: Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.unsafe_rawColors.RED_400,
};
let closure_8 = createStyles(obj);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (event) => {
      let channelContainer;
      let closure_2;
      let first;
      let items2;
      let obj6;
      let str;
      let str2;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp7;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(41);
      event = event.event;
      const tmp4 = closure_8();
      _require = tmp4;
      const channel_id = event.channel_id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [closure_5];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel_id) {
        const fn = function v() {
          return ChannelStore.getChannel(channel_id);
        };
        const items1 = [channel_id];
        cResult[1] = channel_id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      let tmp11 = channel_id(5043)(stateFromStores);
      dependencyMap = tmp11;
      const tmp10 = channel_id;
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === tmp11) {
          if (cResult[6] === event) {
            if (cResult[7] === tmp4.channelContainer) {
              if (cResult[8] === tmp4.channelIcon) {
                if (cResult[9] === tmp4.header) {
                  if (cResult[10] === tmp4.headerSubtitle) {
                    if (cResult[11] === tmp4.headerTitle) {
                      tmp12 = cResult[12];
                      tmp13 = cResult[13];
                      tmp14 = cResult[14];
                      tmp15 = cResult[15];
                      tmp16 = cResult[16];
                      str = cResult[17];
                      str2 = cResult[18];
                      tmp17 = cResult[19];
                      tmp18 = cResult[20];
                    }
                    if (cResult[29] === tmp12) {
                      if (cResult[30] === tmp15) {
                        if (cResult[31] === tmp16) {
                          if (cResult[32] === str) {
                            if (cResult[33] === str2) {
                              let tmp32;
                              if (cResult[34] === tmp17) {
                                tmp32 = cResult[35];
                              }
                              if (cResult[36] === tmp13) {
                                if (cResult[37] === tmp14) {
                                  if (cResult[38] === tmp32) {
                                    let tmp35;
                                    if (cResult[39] === tmp18) {
                                      tmp35 = cResult[40];
                                    }
                                    return tmp35;
                                  }
                                }
                              }
                              let obj2 = { style: tmp18, children: items2 };
                              items2 = [tmp14, tmp32];
                              const tmp37 = closure_7(tmp13, obj2);
                              cResult[36] = tmp13;
                              cResult[37] = tmp14;
                              cResult[38] = tmp32;
                              cResult[39] = tmp18;
                              cResult[40] = tmp37;
                              tmp35 = tmp37;
                            }
                          }
                        }
                      }
                    }
                    let obj3 = { style: tmp15, accessibilityLabel: tmp16, variant: str, color: str2, children: tmp17 };
                    const tmp34 = closure_6(tmp12, obj3);
                    cResult[29] = tmp12;
                    cResult[30] = tmp15;
                    cResult[31] = tmp16;
                    cResult[32] = str;
                    cResult[33] = str2;
                    cResult[34] = tmp17;
                    cResult[35] = tmp34;
                    tmp32 = tmp34;
                  }
                }
              }
            }
          }
        }
      }
      const tmpResult3 = require("EntityUtils");
      let locationFromEvent = tmpResult3.getLocationFromEvent(event);
      let tmp20 = tmp11;
      if (tmp11 == null) {
        tmp20 = locationFromEvent;
      }
      locationFromEvent = tmp20;
      if (cResult[21] === stateFromStores) {
        let tmp21;
        let tmp24;
        let tmp26;
        let tmp29;
        let formatResult;
        if (cResult[22] === event) {
          tmp21 = cResult[23];
        }
        closure_5 = tmp21;
        const header = tmp4.header;
        const _Symbol = Symbol;
        const headerTitle = tmp4.headerTitle;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(require("intl").t.yBsFE3);
          cResult[24] = stringResult;
          tmp24 = stringResult;
        } else {
          tmp24 = cResult[24];
        }
        if (cResult[25] !== tmp4.headerTitle) {
          const obj4 = {
            style: headerTitle,
            variant: "heading-xl/bold",
            color: "mobile-text-heading-primary",
            children: tmp24,
          };
          const tmp28 = closure_6(require("Text/Text").Text, obj4);
          cResult[25] = tmp4.headerTitle;
          cResult[26] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[26];
        }
        let Text = tmp(4886).Text;
        const headerSubtitle = tmp4.headerSubtitle;
        if (cResult[27] !== stateFromStores) {
          let formatToPlainStringResult;
          if (null != stateFromStores) {
            const intl2 = tmp(1126).intl;
            const formatToPlainString = intl2.formatToPlainString;
            const obj5 = { channelName: tmp10(9260)(obj6) };
            const sxcQPE = tmp(1126).t.sxcQPE;
            obj6 = { channel: stateFromStores };
            formatToPlainStringResult = formatToPlainString(sxcQPE, obj5);
          }
          cResult[27] = stateFromStores;
          cResult[28] = formatToPlainStringResult;
          tmp29 = formatToPlainStringResult;
        } else {
          tmp29 = cResult[28];
        }
        if (null != stateFromStores) {
          const intl4 = tmp(1126).intl;
          const obj7 = {
            channelName: tmp20,
            channelHook() {
              let tmp2Result;
              const obj = { style: channelContainer.channelContainer, children: tmp2Result };
              tmp2Result = null != closure_5;
              const Fragment = react.Fragment;
              if (tmp2Result) {
                const obj2 = { source: tmp5, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp4.channelIcon };
                const Icon = native.Icon;
                tmp2Result = metroRequire(Icon, obj2);
              }
              const items = [metroRequire(View, obj)];
              let tmp11 = closure_2;
              const Text = Text_Text.Text;
              if (closure_2 == null) {
                let result = null;
                if (null != locationFromEvent) {
                  const tmp9Result = guildEventDetailsParser;
                  result = tmp9Result.guildEventLocationParser(tmp12, true);
                }
                tmp11 = result;
              }
              const obj3 = { children: items };
              items[1] = metroRequire(Text, {
                accessibilityElementsHidden: true,
                importantForAccessibility: "no",
                variant: "text-sm/medium",
                color: "text-default",
                children: tmp11,
              });
              let str = locationFromEvent;
              if (locationFromEvent == null) {
                str = "preview-body";
              }
              return metroImportDefault(Fragment, obj3, str);
            },
          };
          formatResult = intl4.format(tmp(1126).t.f55NX0, obj7);
        } else {
          const intl3 = tmp(1126).intl;
          formatResult = intl3.string(tmp(1126).t.KDPFi9);
        }
        cResult[4] = stateFromStores;
        cResult[5] = tmp11;
        cResult[6] = event;
        cResult[7] = tmp4.channelContainer;
        cResult[8] = tmp4.channelIcon;
        cResult[9] = tmp4.header;
        cResult[10] = tmp4.headerSubtitle;
        cResult[11] = tmp4.headerTitle;
        cResult[12] = Text;
        cResult[13] = locationFromEvent;
        cResult[14] = tmp26;
        cResult[15] = headerSubtitle;
        cResult[16] = tmp29;
        cResult[17] = "text-sm/medium";
        cResult[18] = "text-default";
        cResult[19] = formatResult;
        cResult[20] = header;
        tmp17 = formatResult;
        tmp18 = header;
        str2 = "text-default";
        str = "text-sm/medium";
        tmp16 = tmp29;
        tmp15 = headerSubtitle;
        tmp14 = tmp26;
        tmp13 = tmp23;
        tmp12 = Text;
      }
      const tmpResult4 = require("GuildEventUtils");
      const eventLocationIconSource = tmpResult4.getEventLocationIconSource(event, stateFromStores, true);
      cResult[21] = stateFromStores;
      cResult[22] = event;
      cResult[23] = eventLocationIconSource;
      tmp21 = eventLocationIconSource;
    }
  : (event) => {
      let channelContainer;
      let closure_2;
      let closure_5;
      let formatResult;
      let formatToPlainStringResult;
      let intl;
      let items2;
      let obj7;
      event = event.event;
      let eventLocationIconSource;
      const tmp = closure_8();
      _require = tmp;
      const channel_id = event.channel_id;
      let obj = require("get initialized");
      let items = [eventLocationIconSource];
      const items1 = [channel_id];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
      const tmp5 = channel_id;
      const tmp6 = channel_id(5043)(stateFromStores);
      dependencyMap = tmp6;
      let obj2 = require("EntityUtils");
      let locationFromEvent = obj2.getLocationFromEvent(event);
      let tmp8 = tmp6;
      if (tmp6 == null) {
        tmp8 = locationFromEvent;
      }
      locationFromEvent = tmp8;
      let tmp2Result = tmp2(9258);
      eventLocationIconSource = tmp2Result.getEventLocationIconSource(event, stateFromStores, true);
      let obj3 = { style: tmp.header, children: items2 };
      const obj4 = {
        style: tmp.headerTitle,
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: intl.string(require("intl").t.yBsFE3),
      };
      let Text = tmp2(4886).Text;
      intl = tmp2(1126).intl;
      items2 = [closure_6(Text, obj4)];
      const obj5 = {
        style: tmp.headerSubtitle,
        accessibilityLabel: formatToPlainStringResult,
        variant: "text-sm/medium",
        color: "text-default",
        children: formatResult,
      };
      formatToPlainStringResult = undefined;
      const Text2 = tmp2(4886).Text;
      const tmp10 = locationFromEvent;
      if (null != stateFromStores) {
        const intl2 = tmp2(1126).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const obj6 = { channelName: tmp5(9260)(obj7) };
        const sxcQPE = tmp2(1126).t.sxcQPE;
        obj7 = { channel: stateFromStores };
        formatToPlainStringResult = formatToPlainString(sxcQPE, obj6);
      }
      if (null != stateFromStores) {
        const intl4 = tmp2(1126).intl;
        const obj8 = {
          channelName: tmp8,
          channelHook() {
            let tmp2Result;
            const obj = { style: channelContainer.channelContainer, children: tmp2Result };
            tmp2Result = null != closure_5;
            const Fragment = react.Fragment;
            if (tmp2Result) {
              const obj2 = { source: tmp5, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp4.channelIcon };
              const Icon = native.Icon;
              tmp2Result = metroRequire(Icon, obj2);
            }
            const items = [metroRequire(View, obj)];
            let tmp11 = closure_2;
            const Text = Text_Text.Text;
            if (closure_2 == null) {
              let result = null;
              if (null != locationFromEvent) {
                const tmp9Result = guildEventDetailsParser;
                result = tmp9Result.guildEventLocationParser(tmp12, true);
              }
              tmp11 = result;
            }
            const obj3 = { children: items };
            items[1] = metroRequire(Text, {
              accessibilityElementsHidden: true,
              importantForAccessibility: "no",
              variant: "text-sm/medium",
              color: "text-default",
              children: tmp11,
            });
            let str = locationFromEvent;
            if (locationFromEvent == null) {
              str = "preview-body";
            }
            return metroImportDefault(Fragment, obj3, str);
          },
        };
        formatResult = intl4.format(tmp2(1126).t.f55NX0, obj8);
      } else {
        const intl3 = tmp2(1126).intl;
        formatResult = intl3.string(tmp2(1126).t.KDPFi9);
      }
      items2[1] = closure_6(Text2, obj5);
      return closure_7(tmp10, obj3);
    };
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx");

export default function EditGuildEventPreview(guild) {
  let error;
  let guildEvent;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let loading;
  let obj2;
  let stringResult;
  let tmp5;
  let tmp6;
  guild = guild.guild;
  ({ initialGuildEvent: importDefault, guildEvent } = guild);
  const isEdit = guild.isEdit;
  ({ loading, error, onSave: View } = guild);
  const tmp = closure_8();
  const intl = guild(guildEvent[17]).intl;
  const string = intl.string;
  const t = guild(guildEvent[17]).t;
  if (isEdit) {
    stringResult = string(t.e5VEcE);
    tmp5 = guildEvent;
    tmp6 = tmp2;
  } else {
    stringResult = string(t["60lJ0C"]);
    tmp5 = guildEvent;
    tmp6 = tmp2;
  }
  const items = [guildEvent, guild.id];
  const memo = isEdit.useMemo(() => {
    const obj = EditGuildEventUtils;
    return obj.convertToFakeGuildEvent(guildEvent, guild.id);
  }, items);
  let obj = { bottom: true, style: tmp.container, children: closure_7(View, obj2) };
  obj2 = { style: items1, children: items4 };
  items1 = [,];
  ({ flex: arr2[0], centered: arr2[1] } = tmp);
  let obj3 = { style: tmp.centerContainer, children: items3 };
  const obj4 = { style: tmp.eventContainer, children: items2 };
  const SafeAreaPaddingView = tmp6(tmp5[20]).SafeAreaPaddingView;
  items2 = [
    closure_6(tmp6(tmp5[21]).GuildEventCardImageHeader, { event: memo }),
    closure_6(tmp6(tmp5[21]).GuildEventCardHeader, { event: memo, isPreview: true }),
    closure_6(tmp6(tmp5[21]).GuildEventCardMetaInfo, { event: memo }),
    closure_6(tmp6(tmp5[21]).GuildEventSimpleLocation, { event: memo }),
  ];
  items3 = [closure_7(View, obj4), closure_6(closure_9, { event: memo })];
  items4 = [closure_7(View, obj3)];
  let tmp8Result = null;
  const obj5 = { style: tmp.buttonContainer, children: items5 };
  if (null != error) {
    const obj6 = { style: tmp.error, children: error.getAnyErrorMessage() };
    const LegacyText = tmp6(tmp5[14]).LegacyText;
    tmp8Result = closure_6(LegacyText, obj6);
  }
  items5 = [tmp8Result];
  const obj7 = {
    text: stringResult,
    variant: "primary",
    onPress() {
      if (null != guildEvent.recurrenceRule) {
        if (isEdit) {
          let obj = ScheduleUtils;
          if (obj.hasScheduleChanges(importDefault, tmp)) {
            const obj3 = {
              importer() {
                let onConfirm;
                const promise = guild(guildEvent[26])(guildEvent[25], guildEvent.paths);
                return promise.then((result) => {
                  let closure_0 = result.default;
                  return (arg0) => {
                    const obj = { onConfirm };
                    const merged = Object.assign(arg0);
                    return closure_3_6(closure_0, obj);
                  };
                });
              },
              isDismissable: false,
            };
            const obj2 = actions_AlertActionCreatorsDefault;
            obj2.openLazy(obj3);
          }
        }
      }
      View();
    },
    disabled: loading,
    loading,
  };
  items5[1] = closure_6(tmp6(tmp5[22]).Button, obj7);
  items4[1] = closure_7(View, obj5);
  return closure_6(SafeAreaPaddingView, obj);
}
