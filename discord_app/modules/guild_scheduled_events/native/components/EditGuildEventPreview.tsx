// === Module 9738: PreviewBody ===

// Module 9738 (PreviewBody)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import set from "set" /* 500 */;

const require = arg1;
function PreviewBody(event) {
  event = event.event;
  let _require;
  let channel_id;
  dependencyMap = undefined;
  let locationFromEvent;
  locationFromEvent = undefined;
  let eventLocationIconSource;
  const tmp = callback3();
  _require = tmp;
  channel_id = event.channel_id;
  let obj = _require(589);
  let items = [eventLocationIconSource];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channel_id), items1);
  const tmp6 = channel_id(4674)(stateFromStores);
  dependencyMap = tmp6;
  obj1 = _require(9675);
  locationFromEvent = obj1.getLocationFromEvent(event);
  let tmp8 = tmp6;
  if (tmp6 == null) {
    tmp8 = locationFromEvent;
  }
  locationFromEvent = tmp8;
  eventLocationIconSource = _require(9739).getEventLocationIconSource(event, stateFromStores, true);
  obj = { style: tmp.header, children: null };
  obj = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1236).intl;
  obj[3] = intl.string(_require(1236).t.yBsFE3);
  const items2 = [callback(_require(4474).Text, obj), ];
  obj1 = { style: tmp.headerSubtitle, accessibilityLabel: null, variant: "text-sm/medium", color: "text-default", children: null };
  let formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl2 = tmp2(1236).intl;
    const obj2 = { channelName: null };
    const obj3 = { channel: null };
    obj3[0] = stateFromStores;
    obj2[0] = channel_id(9425)(obj3);
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.sxcQPE, obj2);
  }
  obj1[1] = formatToPlainStringResult;
  if (null != stateFromStores) {
    const intl4 = tmp2(1236).intl;
    const obj4 = { channelName: null, channelHook: null };
    obj4[0] = tmp8;
    obj4[1] = function channelHook() {
      let obj = { style: lib.channelContainer, children: null };
      let tmp2Result = null != closure_5;
      if (tmp2Result) {
        obj = { source: null, size: null, style: null };
        obj[0] = tmp5;
        obj[1] = lib(1297).Icon.Sizes.EXTRA_SMALL;
        obj[2] = tmp4.channelIcon;
        tmp2Result = tmp2(lib(1297).Icon, obj);
      }
      obj[1] = tmp2Result;
      const items = [closure_1_6(locationFromEvent, obj), ];
      let tmp11 = dependencyMap;
      if (dependencyMap == null) {
        let result = null;
        if (null != locationFromEvent) {
          result = lib(9740).guildEventLocationParser(tmp12, true);
          const tmp9Result = lib(9740);
        }
        tmp11 = result;
      }
      obj = { children: null };
      items[1] = closure_1_6(lib(4474).Text, { accessibilityElementsHidden: true, importantForAccessibility: "no", variant: "text-sm/medium", color: "text-default", children: tmp11 });
      obj[0] = items;
      let str = locationFromEvent;
      if (locationFromEvent == null) {
        str = "preview-body";
      }
      return closure_1_7(locationFromEvent.Fragment, obj, str);
    };
    let formatResult = intl4.format(tmp2(1236).t.f55NX0, obj4);
  } else {
    const intl3 = tmp2(1236).intl;
    formatResult = intl3.string(tmp2(1236).t.KDPFi9);
  }
  obj1[4] = formatResult;
  items2[1] = callback(_require(4474).Text, obj1);
  obj[1] = items2;
  return closure_7(locationFromEvent, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, centered: null, centerContainer: null, flex: null, header: null, headerTitle: null, headerSubtitle: null, eventContainer: null, channelContainer: null, channelIcon: null, buttonContainer: null, error: null };
createCacheKey = { flex: 1, padding: 16, paddingBottom: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", overflow: "visible" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "column", alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { flexGrow: 0, width: "100%" };
createCacheKey[3] = { flex: 1, overflow: "visible" };
createCacheKey[4] = { alignItems: "center", paddingBottom: 24 };
createCacheKey[5] = { marginTop: 16, marginBottom: 8 };
createCacheKey[6] = { textAlign: "center" };
createCacheKey[7] = { padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: ThemesDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
createCacheKey[8] = { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 14 };
let obj2 = { tintColor: ThemesDefault.colors.TEXT_SUBTLE, marginRight: 4, height: 14, transform: null };
let num = 0;
if (set.isAndroid()) {
  num = 2;
}
let items = [{ translateY: num }];
obj2[3] = items;
createCacheKey[9] = obj2;
createCacheKey[10] = { position: "absolute", bottom: 16, left: 0, right: 0 };
let obj1 = { padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 24, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: ThemesDefault.radii.sm, shadowOpacity: 0.2, elevation: 2, shadowRadius: 16, shadowOffset: { height: 8, width: 0 }, overflow: "visible" };
createCacheKey[11] = { paddingBottom: 8, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, color: ThemesDefault.unsafe_rawColors.RED_400 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx");

export default function EditGuildEventPreview(guild) {
  guild = guild.guild;
  ({ initialGuildEvent: importDefault, guildEvent } = guild);
  const isEdit = guild.isEdit;
  ({ loading, error, onSave: View } = guild);
  const tmp = callback3();
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
  const memo = isEdit.useMemo(() => guild(guildEvent[17]).convertToFakeGuildEvent(guildEvent, guild.id), items);
  let obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: items1, children: null };
  items1 = [, ];
  ({ flex: arr2[0], centered: arr2[1] } = tmp);
  obj = { style: tmp.centerContainer, children: null };
  obj1 = { style: tmp.eventContainer, children: null };
  const items2 = [callback(tmp6(tmp5[19]).GuildEventCardImageHeader, { event: memo }), callback(tmp6(tmp5[19]).GuildEventCardHeader, { event: memo, isPreview: true }), callback(tmp6(tmp5[19]).GuildEventCardMetaInfo, { event: memo }), callback(tmp6(tmp5[19]).GuildEventSimpleLocation, { event: memo })];
  obj1[1] = items2;
  const items3 = [callback2(View, obj1), callback(PreviewBody, { event: memo })];
  obj[1] = items3;
  const items4 = [callback2(View, obj), ];
  let obj2 = { style: tmp.buttonContainer, children: null };
  let tmp8Result = null;
  if (null != error) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.error;
    obj3[1] = error.getAnyErrorMessage();
    tmp8Result = tmp8(tmp6(tmp5[15]).LegacyText, obj3);
  }
  const items5 = [
    tmp8Result,
    callback(tmp6(tmp5[20]).Button, {
      text: stringResult,
      variant: "primary",
      onPress() {
        if (null != guildEvent.recurrenceRule) {
          if (isEdit) {
            let obj = guild(guildEvent[21]);
            if (obj.hasScheduleChanges(closure_1, tmp)) {
              obj = { importer: null };
              obj[0] = function importer() {
                return closure_1_0(closure_1_2[24])(closure_1_2[23], closure_1_2.paths).then((arg0) => {
                  closure_0 = arg0.default;
                  return (arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj.onConfirm = closure_1_4;
                    return closure_2_6(closure_0, obj);
                  };
                });
              };
              closure_1_1(guildEvent[22]).openLazy(obj);
              const obj2 = closure_1_1(guildEvent[22]);
            }
          }
        }
        callback();
      },
      disabled: loading,
      loading
    })
  ];
  obj2[1] = items5;
  items4[1] = callback2(View, obj2);
  obj[1] = items4;
  obj[2] = callback2(View, obj);
  return callback(tmp6(tmp5[18]).SafeAreaPaddingView, obj);
};