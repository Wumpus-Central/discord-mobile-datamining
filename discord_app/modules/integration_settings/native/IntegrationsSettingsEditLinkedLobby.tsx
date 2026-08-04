// discord_app/modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx
import Button from "Button";
import { View } from "Form";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "TableRowGroupTitle";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { screenContainer: null, header: null, divider: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", marginTop: 8, marginBottom: 32, gap: 12 };
createCacheKey[2] = { height: 1, width: 48, backgroundColor: require("Themes").colors.BORDER_STRONG };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: 1, width: 48, backgroundColor: require("Themes").colors.BORDER_STRONG };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx");

export default function EditLinkedLobby(channel) {
  channel = channel.channel;
  const numScreensToPop = channel.numScreensToPop;
  let navigation;
  let analyticsLocations;
  let linked_at;
  let stateFromStores;
  let callback1;
  let obj = channel(navigation[6]);
  const token = obj.useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = createCacheKey();
  let obj1 = channel(navigation[7]);
  navigation = obj1.useNavigation();
  analyticsLocations = numScreensToPop(navigation[8])(numScreensToPop(navigation[9]).EDIT_CHANNEL_SYNCING).analyticsLocations;
  let obj2 = channel(navigation[10]);
  let linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = obj2.useGetOrFetchApplication(application_id);
  const linkedLobby2 = channel.linkedLobby;
  linked_at = undefined;
  const tmp7 = numScreensToPop(navigation[8]);
  if (linkedLobby2 != null) {
    linked_at = linkedLobby2.linked_at;
  }
  const tmp10 = numScreensToPop(navigation[11])(channel, true);
  const items = [stateFromStores];
  stateFromStores = channel(navigation[12]).useStateFromStores(items, () => {
    const linkedLobby = channel.linkedLobby;
    let linked_by;
    if (linkedLobby != null) {
      linked_by = linkedLobby.linked_by;
    }
    return stateFromStores.getUser(linked_by);
  });
  let obj4 = analyticsLocations;
  const items1 = [navigation, numScreensToPop];
  const callback = analyticsLocations.useCallback(() => {
    navigation.pop(numScreensToPop);
  }, items1);
  let str;
  let tmp3Result = tmp3(tmp2[13]);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const items2 = [stateFromStores, analyticsLocations, channel.id];
  const tmpResult = channel(navigation[12]);
  callback1 = obj4.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
      obj[0] = tmp.id;
      obj[1] = channel.id;
      obj[2] = analyticsLocations;
      numScreensToPop(navigation[14])(obj);
    }
  }, items2);
  const items3 = [linked_at, stateFromStores, callback1];
  const memo = obj4.useMemo(() => {
    if (null == linked_at) {
      return null;
    } else {
      const _Date = Date;
      const date = new Date(tmp);
      if (null != stateFromStores) {
        const intl2 = channel(navigation[15]).intl;
        let obj = { username: null, usernameHook: null, linkedAtDate: null };
        obj[0] = tmp17.username;
        obj[1] = function usernameHook(children) {
          return outer1_6(outer1_0(outer1_2[16]).Text, { onPress: closure_6, variant: "text-sm/semibold", color: "text-strong", children }, arg1);
        };
        obj[2] = date;
        let formatResult = intl2.format(channel(navigation[15]).t.uV2AkA, obj);
      } else {
        const intl = channel(navigation[15]).intl;
        obj = { linkedAtDate: null };
        obj[0] = date;
        formatResult = intl.formatToPlainString(channel(navigation[15]).t.EyygeM, obj);
      }
      return formatResult;
    }
  }, items3);
  let tmp19Result = null;
  if (null != getOrFetchApplication) {
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp5.screenContainer;
    obj[1] = { paddingTop: 16 };
    obj = { spacing: null, style: null, children: null };
    obj[0] = tmp3(tmp2[5]).space.PX_24;
    obj1 = { paddingHorizontal: null };
    obj1[0] = token;
    obj[1] = obj1;
    obj2 = { style: null, children: null };
    obj2[0] = tmp5.header;
    const obj3 = { source: null, size: null };
    tmp3Result = tmp3(tmp2[20]);
    obj4 = { id: null, icon: null };
    ({ id: obj12[0], icon: obj12[1] } = getOrFetchApplication);
    obj3[0] = tmp3Result.getApplicationIconSource(obj4);
    obj3[1] = tmp(tmp2[19]).AvatarSizes.XXLARGE;
    const items4 = [callback1(tmp(tmp2[19]).Avatar, obj3), , ];
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj5[2] = getOrFetchApplication.name;
    items4[1] = callback1(tmp(tmp2[16]).Text, obj5);
    let tmp20Result = null != memo;
    if (tmp20Result) {
      const obj6 = { children: null };
      const obj7 = { style: null };
      obj7[0] = tmp5.divider;
      const items5 = [tmp19(tmp21, obj7), ];
      const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      obj8[2] = memo;
      items5[1] = tmp19(tmp(tmp2[16]).Text, obj8);
      obj6[0] = items5;
      tmp20Result = tmp20(closure_7, obj6);
    }
    items4[2] = tmp20Result;
    obj2[1] = items4;
    const items6 = [closure_8(linked_at, obj2), , ];
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: null };
    let intl = tmp(tmp2[15]).intl;
    const obj10 = { channelName: null };
    obj10[0] = tmp10;
    obj9[2] = intl.format(tmp(tmp2[15]).t.DA9v5F, obj10);
    items6[1] = callback1(tmp(tmp2[16]).Text, obj9);
    const obj11 = { hasIcons: false, children: null };
    const obj12 = { label: null, variant: "danger", onPress: null };
    let intl2 = tmp(tmp2[15]).intl;
    obj12[0] = intl2.string(tmp(tmp2[15]).t.LLWaxQ);
    obj12[2] = tmp3ResultResult;
    obj11[1] = callback1(tmp(tmp2[22]).TableRow, obj12);
    items6[2] = callback1(tmp(tmp2[21]).TableRowGroup, obj11);
    obj[2] = items6;
    obj[2] = closure_8(tmp(tmp2[18]).Stack, obj);
    tmp19Result = tmp19(tmp(tmp2[17]).Form, obj);
  }
  return tmp19Result;
};