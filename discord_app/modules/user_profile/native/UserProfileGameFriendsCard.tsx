// discord_app/modules/user_profile/native/UserProfileGameFriendsCard.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import DividerDefault from "UserProfileCard.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ card: { flexDirection: "column" } });
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendsCard.tsx");

export default function UserProfileGameFriendsCard(arg0) {
  importDefault = undefined;
  dependencyMap = undefined;
  jsx = undefined;
  ({ applicationIds, style } = arg0);
  const tmp = callback();
  const found = useGetOrFetchApplicationsDefault(applicationIds).filter((item, index) => null != item);
  if (0 === found.length) {
    return null;
  } else {
    importDefault = "text-md/normal";
    if (1 === found.length) {
      const intl2 = found(1236).intl;
      let obj = { applicationName: null };
      obj[0] = function applicationName() {
        return lib(textmdnormal(11799), { application: found[0], textVariant: textmdnormal, iconSize: 16 }, found[0].id);
      };
      let formatResult = intl2.format(found(1236).t.wQ6urw, obj);
      let tmp6 = found;
    } else if (2 === found.length) {
      const intl = found(1236).intl;
      obj = { applicationName: null, applicationName2: null };
      obj[0] = function applicationName() {
        return lib(textmdnormal(11799), { application: found[0], textVariant: textmdnormal, iconSize: 16 }, found[0].id);
      };
      obj[1] = function applicationName2() {
        return lib(textmdnormal(11799), { application: found[1], textVariant: textmdnormal, iconSize: 16 }, found[1].id);
      };
      formatResult = intl.format(found(1236).t.C98CSN, obj);
      tmp6 = found;
    } else {
      dependencyMap = found[found.length - 1];
      jsx = found.slice(0, -1);
      const intl4 = found(1236).intl;
      obj = { applications: null, applicationNameLast: null };
      obj[0] = function applications(closure_2) {
        return lib.map((item, index) => closure_1_3(closure_1_1(closure_1_2[5]), { application: item, useComma: true, textVariant: closure_1, iconSize: 16 }, item.id));
      };
      obj[1] = function applicationNameLast() {
        return lib(textmdnormal(11799), { application: dependencyMap, textVariant: textmdnormal, iconSize: 16 });
      };
      formatResult = intl4.format(found(1236).t.UxpwAh, obj);
      tmp6 = found;
    }
    obj1 = { style: null, title: null, children: null };
    const items = [tmp.card, style];
    obj1[0] = items;
    const intl3 = tmp6(1236).intl;
    obj1[1] = intl3.string(tmp6(1236).t["Uv/eTx"]);
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    obj2[2] = formatResult;
    obj1[2] = jsx(tmp6(4734).Text, { variant: "text-md/normal", color: "text-default", children: null });
    return jsx(DividerDefault, { style: null, title: null, children: null });
  }
  const arr = useGetOrFetchApplicationsDefault(applicationIds);
};