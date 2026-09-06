// === Module 9768: EditGuildEventPreview ===

// Module 9768 (EditGuildEventPreview)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import ScheduleUtils from "ScheduleUtils" /* 9665 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9704 */;
import guildEventDetailsParser from "guildEventDetailsParser" /* 9771 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function PreviewBody(event) {
  event = event.event;
  let eventLocationIconSource;
  const tmp = closure_8();
  _require = tmp;
  const channel_id = event.channel_id;
  let obj = require("initialize");
  let items = [eventLocationIconSource];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const tmp6 = channel_id(4713)(stateFromStores);
  dependencyMap = tmp6;
  let obj1 = require("EntityUtils");
  let locationFromEvent = obj1.getLocationFromEvent(event);
  let tmp8 = tmp6;
  if (tmp6 == null) {
    tmp8 = locationFromEvent;
  }
  locationFromEvent = tmp8;
  eventLocationIconSource = require("GuildEventUtils").getEventLocationIconSource(event, stateFromStores, true);
  obj = { style: tmp.header, children: null };
  obj = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1114).intl;
  obj.children = intl.string(require("util").t.yBsFE3);
  const items2 = [closure_6(require("Text/Text").Text, obj), ];
  obj1 = { style: tmp.headerSubtitle, accessibilityLabel: null, variant: "text-sm/medium", color: "text-default", children: null };
  let formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl2 = tmp2(1114).intl;
    const obj2 = { channelName: null };
    const obj3 = { channel: stateFromStores };
    obj2.channelName = channel_id(9770)(obj3);
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.sxcQPE, obj2);
  }
  obj1.accessibilityLabel = formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl4 = tmp2(1114).intl;
    const obj4 = {
      channelName: tmp8,
      channelHook() {
          let obj = { style: channelContainer.channelContainer, children: null };
          let tmp2Result = null != closure_5;
          if (tmp2Result) {
            obj = { source: tmp5, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp4.channelIcon };
            tmp2Result = tmp2(native.Icon, obj);
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
          obj = { children: null };
          items[1] = timestampProducer(Text_Text.Text, { accessibilityElementsHidden: true, importantForAccessibility: "no", variant: "text-sm/medium", color: "text-default", children: tmp11 });
          obj.children = items;
          let str = locationFromEvent;
          if (locationFromEvent == null) {
            str = "preview-body";
          }
          return React5(noop.Fragment, obj, str);
        }
    };
    let formatResult = intl4.format(tmp2(1114).t.f55NX0, obj4);
  } else {
    const intl3 = tmp2(1114).intl;
    formatResult = intl3.string(tmp2(1114).t.KDPFi9);
  }
  obj1.children = formatResult;
  items2[1] = closure_6(require("Text/Text").Text, obj1);
  obj.children = items2;
  return closure_7(locationFromEvent, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, centered: null, centerContainer: null, flex: null, header: null, headerTitle: null, headerSubtitle: null, eventContainer: null, channelContainer: null, channelIcon: null, buttonContainer: null, error: null };
createStyles = { flex: 1, padding: 16, paddingBottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", overflow: "visible" };
createStyles.container = createStyles;
createStyles.centered = { flexDirection: "column", alignItems: "center", justifyContent: "center" };
createStyles.centerContainer = { flexGrow: 0, width: "100%" };
createStyles.flex = { flex: 1, overflow: "visible" };
createStyles.header = { alignItems: "center", paddingBottom: 24 };
createStyles.headerTitle = { marginTop: 16, marginBottom: 8 };
createStyles.headerSubtitle = { textAlign: "center" };
createStyles.eventContainer = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
createStyles.channelContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 14 };
let obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4, height: 14, transform: null };
const PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
let items = [{ translateY: num }];
obj2.transform = items;
createStyles.channelIcon = obj2;
createStyles.buttonContainer = { position: "absolute", bottom: 16, left: 0, right: 0 };
let obj1 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
createStyles.error = { paddingBottom: 8, fontSize: 14, fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx");

export default function EditGuildEventPreview(guild) {
  guild = guild.guild;
  ({ initialGuildEvent: importDefault, guildEvent } = guild);
  const isEdit = guild.isEdit;
  ({ loading, error, onSave: View } = guild);
  const tmp = closure_8();
  const intl = guild(guildEvent[13]).intl;
  const string = intl.string;
  const t = guild(guildEvent[13]).t;
  if (isEdit) {
    let stringResult = string(t.e5VEcE);
    let tmp5 = tmp3;
    let tmp6 = tmp2;
  } else {
    stringResult = string(t["60lJ0C"]);
    tmp5 = tmp3;
    tmp6 = tmp2;
  }
  const items = [guildEvent, guild.id];
  const memo = isEdit.useMemo(() => EditGuildEventUtils.convertToFakeGuildEvent(guildEvent, guild.id), items);
  let obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: null, children: null };
  const items1 = [, ];
  ({ flex: arr2[0], centered: arr2[1] } = tmp);
  obj.style = items1;
  obj = { style: tmp.centerContainer, children: null };
  const obj1 = { style: tmp.eventContainer, children: null };
  const items2 = [closure_6(tmp6(tmp5[19]).GuildEventCardImageHeader, { event: memo }), closure_6(tmp6(tmp5[19]).GuildEventCardHeader, { event: memo, isPreview: true }), closure_6(tmp6(tmp5[19]).GuildEventCardMetaInfo, { event: memo }), closure_6(tmp6(tmp5[19]).GuildEventSimpleLocation, { event: memo })];
  obj1.children = items2;
  const items3 = [closure_7(View, obj1), closure_6(PreviewBody, { event: memo })];
  obj.children = items3;
  const items4 = [closure_7(View, obj), ];
  let obj2 = { style: tmp.buttonContainer, children: null };
  let tmp8Result = null;
  if (null != error) {
    const obj3 = { style: tmp.error, children: error.getAnyErrorMessage() };
    tmp8Result = tmp8(tmp6(tmp5[15]).LegacyText, obj3);
  }
  const items5 = [
    tmp8Result,
    closure_6(tmp6(tmp5[20]).Button, {
      text: stringResult,
      variant: "primary",
      onPress() {
        if (null != guildEvent.recurrenceRule) {
          if (isEdit) {
            let obj = ScheduleUtils;
            if (obj.hasScheduleChanges(closure_1_1, tmp)) {
              obj = {
                importer() {
                        return guild(guildEvent[24])(guildEvent[23], guildEvent.paths).then((result) => {
                          closure_0 = result.default;
                          return (arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            obj.onConfirm = onConfirm;
                            return closure_3_6(closure_0, obj);
                          };
                        });
                      }
              };
              actions_AlertActionCreatorsDefault.openLazy(obj);
            }
          }
        }
        View();
      },
      disabled: loading,
      loading
    })
  ];
  obj2.children = items5;
  items4[1] = closure_7(View, obj2);
  obj.children = items4;
  obj.children = closure_7(View, obj);
  return closure_6(tmp6(tmp5[18]).SafeAreaPaddingView, obj);
};