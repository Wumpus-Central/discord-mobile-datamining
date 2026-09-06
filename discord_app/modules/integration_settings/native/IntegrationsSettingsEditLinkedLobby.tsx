// === Module 16852: IntegrationsSettingsEditLinkedLobby ===

// Module 16852 (IntegrationsSettingsEditLinkedLobby)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { screenContainer: null, header: null, divider: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.screenContainer = createStyles;
createStyles.header = { alignItems: "center", marginTop: 8, marginBottom: 32, gap: 12 };
let size = { height: 1, width: 48, backgroundColor: nativeDefault.colors.BORDER_STRONG };
createStyles.divider = size;
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx");

export default function EditLinkedLobby(channel) {
  channel = channel.channel;
  const numScreensToPop = channel.numScreensToPop;
  let navigation;
  let linked_at;
  let stateFromStores;
  let callback1;
  let obj = channel(navigation[6]);
  const token = obj.useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_9();
  let obj1 = channel(navigation[7]);
  navigation = obj1.useNavigation();
  const analyticsLocations = numScreensToPop(navigation[8])(numScreensToPop(navigation[9]).EDIT_CHANNEL_SYNCING).analyticsLocations;
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
    return UserStore.getUser(linked_by);
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
      const obj = { userId: tmp.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items2);
  const items3 = [linked_at, stateFromStores, callback1];
  const memo = obj4.useMemo(() => {
    if (null == linked_at) {
      return null;
    } else {
      const _Date = Date;
      const date = new Date(linked_at);
      if (null != stateFromStores) {
        const intl2 = util.intl;
        let obj = {
          username: tmp17.username,
          usernameHook(children, arg1) {
                return callback1(channel(navigation[16]).Text, { onPress, variant: "text-sm/semibold", color: "text-strong", children }, arg1);
              },
          linkedAtDate: date
        };
        let formatResult = intl2.format(util.t.uV2AkA, obj);
      } else {
        const intl = util.intl;
        obj = { linkedAtDate: date };
        formatResult = intl.formatToPlainString(util.t.EyygeM, obj);
      }
      return formatResult;
    }
  }, items3);
  let tmp19Result = null;
  if (null != getOrFetchApplication) {
    obj = { style: tmp5.screenContainer, contentContainerStyle: { paddingTop: 16 }, children: null };
    obj = { spacing: tmp3(tmp2[5]).space.PX_24, style: null, children: null };
    obj1 = { paddingHorizontal: token };
    obj.style = obj1;
    obj2 = { style: tmp5.header, children: null };
    const obj3 = { source: null, size: null };
    tmp3Result = tmp3(tmp2[20]);
    obj4 = { id: null, icon: null };
    ({ id: obj12.id, icon: obj12.icon } = getOrFetchApplication);
    obj3.source = tmp3Result.getApplicationIconSource(obj4);
    obj3.size = tmp(tmp2[19]).AvatarSizes.XXLARGE;
    const items4 = [callback1(tmp(tmp2[19]).Avatar, obj3), , ];
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: getOrFetchApplication.name };
    items4[1] = callback1(tmp(tmp2[16]).Text, obj5);
    let tmp20Result = null != memo;
    if (tmp20Result) {
      const obj6 = { children: null };
      const obj7 = { style: tmp5.divider };
      const items5 = [tmp19(tmp21, obj7), ];
      const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: memo };
      items5[1] = tmp19(tmp(tmp2[16]).Text, obj8);
      obj6.children = items5;
      tmp20Result = closure_8(closure_7, obj6);
    }
    items4[2] = tmp20Result;
    obj2.children = items4;
    const items6 = [closure_8(linked_at, obj2), , ];
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: null };
    let intl = tmp(tmp2[15]).intl;
    const obj10 = { channelName: tmp10 };
    obj9.children = intl.format(tmp(tmp2[15]).t.DA9v5F, obj10);
    items6[1] = callback1(tmp(tmp2[16]).Text, obj9);
    const obj11 = { hasIcons: false, children: null };
    const obj12 = { label: null, variant: "danger", onPress: null };
    let intl2 = tmp(tmp2[15]).intl;
    obj12.label = intl2.string(tmp(tmp2[15]).t.LLWaxQ);
    obj12.onPress = tmp3ResultResult;
    obj11.children = callback1(tmp(tmp2[22]).TableRow, obj12);
    items6[2] = callback1(tmp(tmp2[21]).TableRowGroup, obj11);
    obj.children = items6;
    obj.children = closure_8(tmp(tmp2[18]).Stack, obj);
    tmp19Result = tmp19(tmp(tmp2[17]).Form, obj);
  }
  return tmp19Result;
};