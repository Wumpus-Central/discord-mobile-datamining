// discord_app/modules/user_profile/native/UserProfileNameplateEditButton.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import { COLLECTIBLES_PREVIEW_SIZE } from "Constants.tsx";
import { NOOP } from "../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
const createCacheKey = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileNameplateEditButton.tsx");

export default function UserProfileNameplateEditButton(user) {
  user = user.user;
  ({ pendingNameplate, guildId } = user);
  const tmp = callback();
  dependencyMap = tmp2;
  let obj = user(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (closure_2) {
      member = closure_1_6.getMember(guildId, user.id);
    }
    return member;
  });
  obj1 = user(8376);
  obj = { pendingValue: pendingNameplate, userValue: null, guildValue: null, guildId: null };
  const collectibles = user.collectibles;
  let nameplate;
  if (collectibles != null) {
    nameplate = collectibles.nameplate;
  }
  obj[1] = nameplate;
  let nameplate1;
  if (stateFromStores != null) {
    const collectibles2 = stateFromStores.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj[2] = nameplate1;
  obj[3] = guildId;
  const profilePreviewValue = obj1.getProfilePreviewValue(obj);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchNameplate = user(14056).useFetchNameplate(skuId);
  ({ nameplateProduct, nameplateData, nameplateRecord, isFetching } = fetchNameplate);
  if (null != guildId) {
    let nameplate2;
    if (stateFromStores != null) {
      const collectibles4 = stateFromStores.collectibles;
      if (collectibles4 != null) {
        nameplate2 = collectibles4.nameplate;
      }
    }
    nameplate = nameplate2;
  } else {
    const collectibles3 = user.collectibles;
    if (collectibles3 != null) {
      nameplate = collectibles3.nameplate;
    }
  }
  if (undefined !== pendingNameplate) {
    nameplate = pendingNameplate;
  }
  const items1 = [user, nameplate, guildId];
  if (isFetching) {
    obj = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = tmp3(1236).intl;
    obj[0] = intl4.string(tmp3(1236).t.x5CoXR);
    const intl5 = tmp3(1236).intl;
    obj[1] = intl5.string(tmp3(1236).t.MKDeyL);
    obj[2] = NOOP;
    obj[3] = <closure_4 animating size="large" />;
    return jsx(tmp3(14036).UserProfileEditFormButton, { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true });
  } else {
    let name;
    if (nameplateProduct != null) {
      name = nameplateProduct.name;
    }
    if (name == null) {
      const intl = tmp3(1236).intl;
      name = intl.string(tmp3(1236).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (tmp2) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = tmp3(1236).intl;
        obj1 = { label: null };
        obj1[0] = name;
        formatToPlainStringResult = intl2.formatToPlainString(tmp3(1236).t.ep5D4i, obj1);
      }
    }
    const obj2 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp3(1236).intl;
    obj2[0] = intl3.string(tmp3(1236).t.x5CoXR);
    obj2[1] = formatToPlainStringResult;
    const obj3 = { text: null };
    obj3[0] = formatToPlainStringResult;
    obj2[2] = obj3;
    obj2[3] = tmp12;
    if (null != nameplateData) {
      if (null != nameplateRecord) {
        if (null != nameplateProduct) {
          const obj4 = { style: null, children: null };
          obj4[0] = tmp.previewContainer;
          const obj5 = { nameplate: null, fullOpacity: true, isSquarePreview: true };
          obj5[0] = nameplateData;
          obj4[1] = jsx(guildId(9221), { nameplate: null, fullOpacity: true, isSquarePreview: true });
          let tmp15Result = <closure_5 style={null}>{null}</closure_5>;
        }
        obj2[4] = tmp15Result;
        return jsx(tmp3(14036).UserProfileEditFormButton, obj2);
      }
    }
    const obj6 = { source: null, style: null };
    obj6[0] = guildId(8397);
    obj6[1] = tmp.noneIcon;
    tmp15Result = jsx(tmp3(1297).Icon, { source: null, style: null });
  }
  const tmp3Result = user(14056);
};