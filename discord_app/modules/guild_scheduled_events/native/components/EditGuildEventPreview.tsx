// === Module 9865: EditGuildEventPreview ===

// Module 9865 (EditGuildEventPreview)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4752 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5109 */;
import ScheduleUtils from "ScheduleUtils" /* 9753 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9789 */;
import guildEventDetailsParser from "guildEventDetailsParser" /* 9868 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
function PreviewBody(event) {
  event = event.event;
  let eventLocationIconSource;
  const tmp = closure_8();
  _require = tmp;
  const channel_id = event.channel_id;
  let items = [eventLocationIconSource];
  const items1 = [channel_id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const tmp6 = channel_id(4909)(stateFromStores);
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
  const intl = tmp2(1115).intl;
  obj4.children = intl.string(require("util").t.yBsFE3);
  const items2 = [closure_6(require("Text/Text").Text, obj4), ];
  const obj5 = { style: tmp.headerSubtitle, accessibilityLabel: null, variant: "text-sm/medium", color: "text-default", children: null };
  let formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl2 = tmp2(1115).intl;
    const obj6 = { channelName: null };
    const obj7 = { channel: stateFromStores };
    obj6.channelName = tmp5(9867)(obj7);
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.sxcQPE, obj6);
  }
  obj5.accessibilityLabel = formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl4 = tmp2(1115).intl;
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
    let formatResult = intl4.format(tmp2(1115).t.f55NX0, obj8);
  } else {
    const intl3 = tmp2(1115).intl;
    formatResult = intl3.string(tmp2(1115).t.KDPFi9);
  }
  obj5.children = formatResult;
  items2[1] = closure_6(require("Text/Text").Text, obj5);
  obj3.children = items2;
  return closure_7(locationFromEvent, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, padding: 16, paddingBottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", overflow: "visible" }, centered: { flexDirection: "column", alignItems: "center", justifyContent: "center" }, centerContainer: { flexGrow: 0, width: "100%" }, flex: { flex: 1, overflow: "visible" }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, eventContainer: null, channelContainer: null, channelIcon: null, buttonContainer: null, error: null };
let obj3 = { flex: 1, padding: 16, paddingBottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", overflow: "visible" };
obj2.eventContainer = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
obj2.channelContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 14 };
let obj5 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4, height: 14, transform: null };
const PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
let items = [{ translateY: num }];
obj5.transform = items;
obj2.channelIcon = obj5;
obj2.buttonContainer = { position: "absolute", bottom: 16, left: 0, right: 0 };
let obj4 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
obj2.error = { paddingBottom: 8, fontSize: 14, fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_8 = createStyles.createStyles(obj2);
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
  const items2 = [closure_6(tmp6(tmp5[19]).GuildEventCardImageHeader, { event: memo }), closure_6(tmp6(tmp5[19]).GuildEventCardHeader, { event: memo, isPreview: true }), closure_6(tmp6(tmp5[19]).GuildEventCardMetaInfo, { event: memo }), closure_6(tmp6(tmp5[19]).GuildEventSimpleLocation, { event: memo })];
  obj4.children = items2;
  const items3 = [closure_7(View, obj4), closure_6(PreviewBody, { event: memo })];
  obj3.children = items3;
  const items4 = [closure_7(View, obj3), ];
  const obj5 = { style: tmp.buttonContainer, children: null };
  let tmp8Result = null;
  if (null != error) {
    const obj6 = { style: tmp.error, children: error.getAnyErrorMessage() };
    tmp8Result = closure_6(tmp6(tmp5[15]).LegacyText, obj6);
  }
  const items5 = [
    tmp8Result,
    closure_6(tmp6(tmp5[20]).Button, {
      text: stringResult,
      variant: "primary",
      onPress() {
        if (null != guildEvent.recurrenceRule) {
          if (isEdit) {
            if (obj.hasScheduleChanges(closure_1_1, tmp)) {
              const obj3 = {
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
  return closure_6(tmp6(tmp5[18]).SafeAreaPaddingView, obj);
};