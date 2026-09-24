// === Module 17424: IntegrationsSettingsEditLinkedLobby ===

// Module 17424 (IntegrationsSettingsEditLinkedLobby)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8527 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { screenContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, header: { alignItems: "center", marginTop: 8, marginBottom: 32, gap: 12 }, divider: null };
let size = { height: 1, width: 48, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj2.divider = size;
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx");

export default function EditLinkedLobby(channel) {
  channel = channel.channel;
  const numScreensToPop = channel.numScreensToPop;
  let navigation;
  let linked_at;
  let stateFromStores;
  let callback1;
  const token = channel(navigation[6]).useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_9();
  let obj = channel(navigation[6]);
  navigation = channel(navigation[7]).useNavigation();
  let obj2 = channel(navigation[7]);
  const analyticsLocations = numScreensToPop(navigation[8])(numScreensToPop(navigation[9]).EDIT_CHANNEL_SYNCING).analyticsLocations;
  const tmp7 = numScreensToPop(navigation[8]);
  let linkedLobby = channel.linkedLobby;
  let application_id;
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = channel(navigation[10]).useGetOrFetchApplication(application_id);
  const linkedLobby2 = channel.linkedLobby;
  linked_at = undefined;
  const obj3 = channel(navigation[10]);
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
  const items1 = [navigation, numScreensToPop];
  const callback = analyticsLocations.useCallback(() => {
    navigation.pop(numScreensToPop);
  }, items1);
  let str;
  const tmpResult = channel(navigation[12]);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const items2 = [stateFromStores, analyticsLocations, channel.id];
  const tmp3Result = numScreensToPop(navigation[13]);
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
                return callback1(channel(navigation[16]).Text, { onPress, variant: "text-sm/semibold", color: "text-strong", children }, arg1);
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
    obj9.source = tmp3(tmp2[20]).getApplicationIconSource({ id: null, icon: null });
    obj9.size = tmp(tmp2[19]).AvatarSizes.XXLARGE;
    const items4 = [callback1(tmp(tmp2[19]).Avatar, obj9), , ];
    const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: getOrFetchApplication.name };
    items4[1] = callback1(tmp(tmp2[16]).Text, obj11);
    let tmp20Result = null != memo;
    if (tmp20Result) {
      const obj13 = { children: null };
      const obj14 = { style: tmp5.divider };
      const items5 = [tmp19(tmp21, obj14), ];
      const obj15 = { variant: "text-sm/medium", color: "text-subtle", children: memo };
      items5[1] = tmp19(tmp(tmp2[16]).Text, obj15);
      obj13.children = items5;
      tmp20Result = closure_8(closure_7, obj13);
    }
    items4[2] = tmp20Result;
    obj8.children = items4;
    const items6 = [closure_8(linked_at, obj8), , ];
    const obj16 = { variant: "text-sm/normal", color: "text-default", children: null };
    let intl = tmp(tmp2[15]).intl;
    const obj17 = { channelName: tmp10 };
    obj16.children = intl.format(tmp(tmp2[15]).t.DA9v5F, obj17);
    items6[1] = callback1(tmp(tmp2[16]).Text, obj16);
    const obj18 = { hasIcons: false, children: null };
    const obj19 = { label: null, variant: "danger", onPress: null };
    let intl2 = tmp(tmp2[15]).intl;
    obj19.label = intl2.string(tmp(tmp2[15]).t.LLWaxQ);
    obj19.onPress = tmp3ResultResult;
    obj18.children = callback1(tmp(tmp2[22]).TableRow, obj19);
    items6[2] = callback1(tmp(tmp2[21]).TableRowGroup, obj18);
    obj6.children = items6;
    obj4.children = closure_8(tmp(tmp2[18]).Stack, obj6);
    tmp19Result = tmp19(tmp(tmp2[17]).Form, obj4);
    const obj10 = { id: null, icon: null };
    const tmp3Result2 = tmp3(tmp2[20]);
  }
  return tmp19Result;
};