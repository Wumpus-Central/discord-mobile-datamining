// === Module 9257: EditGuildEventPreview ===

// Module 9257 (EditGuildEventPreview)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import ScheduleUtils from "ScheduleUtils" /* 9163 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9179 */;
import guildEventDetailsParser from "guildEventDetailsParser" /* 9259 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, padding: 16, paddingBottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", overflow: "visible" }, centered: { flexDirection: "column", alignItems: "center", justifyContent: "center" }, centerContainer: { flexGrow: 0, width: "100%" }, flex: { flex: 1, overflow: "visible" }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, eventContainer: null, channelContainer: null, channelIcon: null, buttonContainer: null, error: null };
let obj3 = { flex: 1, padding: 16, paddingBottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", overflow: "visible" };
obj2.eventContainer = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
obj2.channelContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 14 };
let obj5 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4, height: 14, transform: null };
const PlatformUtils = fn(1369);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
let items = [{ translateY: num }];
obj5.transform = items;
obj2.channelIcon = obj5;
obj2.buttonContainer = { position: "absolute", bottom: 16, left: 0, right: 0 };
let obj4 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
obj2.error = { paddingBottom: 8, fontSize: 14, fontFamily: fn(1085).Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let f55NX0 = str2;
  let obj = dependencyMap;
  const cResult = str2(576).c(41);
  let str = event.event;
  str2 = closure_8();
  const channel_id = str.channel_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [closure_5];
    cResult[0] = items;
    let first = items;
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
    let tmp5 = items1;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  let obj2 = str2(576);
  const stateFromStores = f55NX0(504).useStateFromStores(first, tmp4, tmp5);
  const tmp8 = channel_id(5043)(stateFromStores);
  dependencyMap = tmp8;
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp8) {
      if (cResult[6] === str) {
        if (cResult[7] === str2.channelContainer) {
          if (cResult[8] === str2.channelIcon) {
            if (cResult[9] === str2.header) {
              if (cResult[10] === str2.headerSubtitle) {
                if (cResult[11] === str2.headerTitle) {
                  if (cResult[29] === cResult[12]) {
                    if (cResult[30] === tmp12) {
                      if (cResult[31] === tmp13) {
                        if (cResult[32] === tmp14) {
                          if (cResult[33] === tmp15) {
                            if (cResult[34] === tmp16) {
                              let tmp38 = cResult[35];
                            }
                            if (cResult[36] === tmp10) {
                              if (cResult[37] === tmp11) {
                                if (cResult[38] === tmp38) {
                                  if (cResult[39] === tmp17) {
                                    let tmp41 = cResult[40];
                                  }
                                  return tmp41;
                                }
                              }
                            }
                            let obj3 = { style: tmp17, children: null };
                            const items2 = [tmp11, tmp38];
                            obj3.children = items2;
                            const tmp43 = closure_7(tmp10, obj3);
                            cResult[36] = tmp10;
                            cResult[37] = tmp11;
                            cResult[38] = tmp38;
                            cResult[39] = tmp17;
                            cResult[40] = tmp43;
                            tmp41 = tmp43;
                          }
                        }
                      }
                    }
                  }
                  const obj4 = { style: cResult[15], accessibilityLabel: cResult[16], variant: cResult[17], color: cResult[18], children: cResult[19] };
                  const tmp40 = closure_6(cResult[12], obj4);
                  cResult[29] = cResult[12];
                  cResult[30] = cResult[15];
                  cResult[31] = cResult[16];
                  cResult[32] = cResult[17];
                  cResult[33] = cResult[18];
                  cResult[34] = cResult[19];
                  cResult[35] = tmp40;
                  tmp38 = tmp40;
                }
              }
            }
          }
        }
      }
    }
  }
  const f55NX0Result = f55NX0(504);
  const tmp7 = channel_id;
  let locationFromEvent = f55NX0(9180).getLocationFromEvent(str);
  let tmp19 = tmp8;
  if (tmp8 == null) {
    tmp19 = locationFromEvent;
  }
  locationFromEvent = tmp19;
  if (cResult[21] === stateFromStores) {
    if (cResult[22] === str) {
      let tmp20 = cResult[23];
    }
    closure_5 = tmp20;
    const header = str2.header;
    const _Symbol = Symbol;
    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = f55NX0(1126).intl;
      const stringResult = intl.string(f55NX0(1126).t.yBsFE3);
      cResult[24] = stringResult;
      let tmp23 = stringResult;
    } else {
      tmp23 = cResult[24];
    }
    if (cResult[25] !== str2.headerTitle) {
      const obj5 = { style: str2.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp23 };
      const tmp27 = closure_6(f55NX0(4886).Text, obj5);
      cResult[25] = str2.headerTitle;
      cResult[26] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[26];
    }
    const Text = f55NX0(4886).Text;
    const headerSubtitle = str2.headerSubtitle;
    if (cResult[27] !== stateFromStores) {
      let formatToPlainStringResult;
      if (null != stateFromStores) {
        const intl2 = f55NX0(1126).intl;
        const obj6 = { channelName: null };
        const obj7 = { channel: stateFromStores };
        obj6.channelName = tmp7(9260)(obj7);
        formatToPlainStringResult = intl2.formatToPlainString(f55NX0(1126).t.sxcQPE, obj6);
      }
      cResult[27] = stateFromStores;
      cResult[28] = formatToPlainStringResult;
      let tmp28 = formatToPlainStringResult;
    } else {
      tmp28 = cResult[28];
    }
    if (null != stateFromStores) {
      const intl4 = f55NX0(1126).intl;
      f55NX0 = f55NX0(1126).t.f55NX0;
      obj = {
        channelName: tmp19,
        channelHook() {
              const obj = { style: str2.channelContainer, children: null };
              let tmp2Result = null != closure_5;
              if (tmp2Result) {
                const obj2 = { source: tmp5, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp4.channelIcon };
                tmp2Result = timestampProducer(native.Icon, obj2);
              }
              obj.children = tmp2Result;
              const items = [timestampProducer(View, obj), ];
              let tmp11 = closure_2;
              if (closure_2 == null) {
                let result = null;
                if (null != locationFromEvent) {
                  result = guildEventDetailsParser.guildEventLocationParser(tmp12, true);
                  const tmp9Result = guildEventDetailsParser;
                }
                tmp11 = result;
              }
              const obj3 = { children: null };
              items[1] = timestampProducer(Text_Text.Text, { accessibilityElementsHidden: true, importantForAccessibility: "no", variant: "text-sm/medium", color: "text-default", children: tmp11 });
              obj3.children = items;
              let str = locationFromEvent;
              if (locationFromEvent == null) {
                str = "preview-body";
              }
              return React5(noop.Fragment, obj3, str);
            }
      };
      let formatResult = intl4.format(f55NX0, obj);
    } else {
      const intl3 = f55NX0(1126).intl;
      formatResult = intl3.string(f55NX0(1126).t.KDPFi9);
    }
    cResult[4] = stateFromStores;
    cResult[5] = tmp8;
    cResult[6] = str;
    cResult[7] = str2.channelContainer;
    cResult[8] = str2.channelIcon;
    cResult[9] = str2.header;
    cResult[10] = str2.headerSubtitle;
    cResult[11] = str2.headerTitle;
    cResult[12] = Text;
    cResult[13] = locationFromEvent;
    cResult[14] = tmp25;
    cResult[15] = headerSubtitle;
    cResult[16] = tmp28;
    str2 = "text-sm/medium";
    cResult[17] = "text-sm/medium";
    str = "text-default";
    cResult[18] = "text-default";
    cResult[19] = formatResult;
    cResult[20] = header;
  }
  const f55NX0Result1 = f55NX0(9180);
  const eventLocationIconSource = f55NX0(9258).getEventLocationIconSource(str, stateFromStores, true);
  cResult[21] = stateFromStores;
  cResult[22] = str;
  cResult[23] = eventLocationIconSource;
  tmp20 = eventLocationIconSource;
  const f55NX0Result2 = f55NX0(9258);
}) : ((event) => {
  event = event.event;
  let eventLocationIconSource;
  const tmp = closure_8();
  _require = tmp;
  const channel_id = event.channel_id;
  let items = [eventLocationIconSource];
  const items1 = [channel_id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const tmp6 = channel_id(5043)(stateFromStores);
  dependencyMap = tmp6;
  let obj = require("initialize");
  const tmp5 = channel_id;
  let locationFromEvent = require("EntityUtils").getLocationFromEvent(event);
  let tmp8 = tmp6;
  if (tmp6 == null) {
    tmp8 = locationFromEvent;
  }
  locationFromEvent = tmp8;
  let obj2 = require("EntityUtils");
  eventLocationIconSource = require("GuildEventUtils").getEventLocationIconSource(event, stateFromStores, true);
  let obj3 = { style: tmp.header, children: null };
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1126).intl;
  obj4.children = intl.string(require("util").t.yBsFE3);
  const items2 = [closure_6(require("Text/Text").Text, obj4), ];
  const obj5 = { style: tmp.headerSubtitle, accessibilityLabel: null, variant: "text-sm/medium", color: "text-default", children: null };
  let formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl2 = tmp2(1126).intl;
    const obj6 = { channelName: null };
    const obj7 = { channel: stateFromStores };
    obj6.channelName = tmp5(9260)(obj7);
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t.sxcQPE, obj6);
  }
  obj5.accessibilityLabel = formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl4 = tmp2(1126).intl;
    const obj8 = {
      channelName: tmp8,
      channelHook() {
          const obj = { style: channelContainer.channelContainer, children: null };
          let tmp2Result = null != closure_5;
          if (tmp2Result) {
            const obj2 = { source: tmp5, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp4.channelIcon };
            tmp2Result = timestampProducer(native.Icon, obj2);
          }
          obj.children = tmp2Result;
          const items = [timestampProducer(View, obj), ];
          let tmp11 = closure_2;
          if (closure_2 == null) {
            let result = null;
            if (null != locationFromEvent) {
              result = guildEventDetailsParser.guildEventLocationParser(tmp12, true);
              const tmp9Result = guildEventDetailsParser;
            }
            tmp11 = result;
          }
          const obj3 = { children: null };
          items[1] = timestampProducer(Text_Text.Text, { accessibilityElementsHidden: true, importantForAccessibility: "no", variant: "text-sm/medium", color: "text-default", children: tmp11 });
          obj3.children = items;
          let str = locationFromEvent;
          if (locationFromEvent == null) {
            str = "preview-body";
          }
          return React5(noop.Fragment, obj3, str);
        }
    };
    let formatResult = intl4.format(tmp2(1126).t.f55NX0, obj8);
  } else {
    const intl3 = tmp2(1126).intl;
    formatResult = intl3.string(tmp2(1126).t.KDPFi9);
  }
  obj5.children = formatResult;
  items2[1] = closure_6(require("Text/Text").Text, obj5);
  obj3.children = items2;
  return closure_7(locationFromEvent, obj3);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx");

export default function EditGuildEventPreview(guild) {
  guild = guild.guild;
  ({ initialGuildEvent: importDefault, guildEvent } = guild);
  const isEdit = guild.isEdit;
  ({ loading, error, onSave: View } = guild);
  const tmp = closure_8();
  const intl = guild(guildEvent[17]).intl;
  const string = intl.string;
  const t = guild(guildEvent[17]).t;
  if (isEdit) {
    let stringResult = string(t.e5VEcE);
    let tmp5 = guildEvent;
    let tmp6 = tmp2;
  } else {
    stringResult = string(t["60lJ0C"]);
    tmp5 = guildEvent;
    tmp6 = tmp2;
  }
  const items = [guildEvent, guild.id];
  const memo = isEdit.useMemo(() => EditGuildEventUtils.convertToFakeGuildEvent(guildEvent, guild.id), items);
  let obj = { bottom: true, style: tmp.container, children: null };
  let obj2 = { style: null, children: null };
  const items1 = [, ];
  ({ flex: arr2[0], centered: arr2[1] } = tmp);
  obj2.style = items1;
  let obj3 = { style: tmp.centerContainer, children: null };
  const obj4 = { style: tmp.eventContainer, children: null };
  const items2 = [closure_6(tmp6(tmp5[21]).GuildEventCardImageHeader, { event: memo }), closure_6(tmp6(tmp5[21]).GuildEventCardHeader, { event: memo, isPreview: true }), closure_6(tmp6(tmp5[21]).GuildEventCardMetaInfo, { event: memo }), closure_6(tmp6(tmp5[21]).GuildEventSimpleLocation, { event: memo })];
  obj4.children = items2;
  const items3 = [closure_7(View, obj4), closure_6(closure_9, { event: memo })];
  obj3.children = items3;
  const items4 = [closure_7(View, obj3), ];
  const obj5 = { style: tmp.buttonContainer, children: null };
  let tmp8Result = null;
  if (null != error) {
    const obj6 = { style: tmp.error, children: error.getAnyErrorMessage() };
    tmp8Result = closure_6(tmp6(tmp5[14]).LegacyText, obj6);
  }
  const items5 = [
    tmp8Result,
    closure_6(tmp6(tmp5[22]).Button, {
      text: stringResult,
      variant: "primary",
      onPress() {
        if (null != guildEvent.recurrenceRule) {
          if (isEdit) {
            if (obj.hasScheduleChanges(closure_1_1, tmp)) {
              const obj3 = {
                importer() {
                        return guild(guildEvent[26])(guildEvent[25], guildEvent.paths).then((result) => {
                          closure_0 = result.default;
                          return (arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            obj.onConfirm = onConfirm;
                            return closure_3_6(closure_0, obj);
                          };
                        });
                      },
                isDismissable: false
              };
              actions_AlertActionCreatorsDefault.openLazy(obj3);
            }
            obj = ScheduleUtils;
          }
        }
        View();
      },
      disabled: loading,
      loading
    })
  ];
  obj5.children = items5;
  items4[1] = closure_7(View, obj5);
  obj2.children = items4;
  obj.children = closure_7(View, obj2);
  return closure_6(tmp6(tmp5[20]).SafeAreaPaddingView, obj);
};