// discord_app/modules/user_profile/native/UserProfileGameFriendsCard.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { useGetOrFetchApplications } from "../../applications/useGetOrFetchApplications.tsx";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ card: { flexDirection: "column" } });
const result = require("createCacheKey").fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendsCard.tsx");

export default function UserProfileGameFriendsCard(arg0) {
  let applicationIds;
  let style;
  let found;
  let importDefault;
  let dependencyMap;
  let jsx;
  ({ applicationIds, style } = arg0);
  const tmp = callback();
  const tmp2 = importDefault;
  found = useGetOrFetchApplications(applicationIds).filter((arg0) => null != arg0);
  if (0 === found.length) {
    return null;
  } else {
    importDefault = "text-md/normal";
    if (1 === found.length) {
      const intl2 = found(1236).intl;
      let obj = { applicationName: null };
      obj[0] = function applicationName() {
        return lib(textmdnormal(12048), { application: found[0], textVariant: textmdnormal, iconSize: 16 }, found[0].id);
      };
      let formatResult = intl2.format(found(1236).t.wQ6urw, obj);
      let tmp6 = found;
    } else if (2 === found.length) {
      const intl = found(1236).intl;
      obj = { applicationName: null, applicationName2: null };
      obj[0] = function applicationName() {
        return lib(textmdnormal(12048), { application: found[0], textVariant: textmdnormal, iconSize: 16 }, found[0].id);
      };
      obj[1] = function applicationName2() {
        return lib(textmdnormal(12048), { application: found[1], textVariant: textmdnormal, iconSize: 16 }, found[1].id);
      };
      formatResult = intl.format(found(1236).t.C98CSN, obj);
      tmp6 = found;
    } else {
      dependencyMap = found[found.length - 1];
      jsx = found.slice(0, -1);
      const intl4 = found(1236).intl;
      obj = { applications: null, applicationNameLast: null };
      obj[0] = function applications(arg0) {
        return lib.map((application) => outer1_3(outer1_1(outer1_2[5]), { application, useComma: true, textVariant: closure_1, iconSize: 16 }, application.id));
      };
      obj[1] = function applicationNameLast() {
        return lib(textmdnormal(12048), { application: dependencyMap, textVariant: textmdnormal, iconSize: 16 });
      };
      formatResult = intl4.format(found(1236).t.UxpwAh, obj);
      tmp6 = found;
    }
    const obj1 = { style: null, title: null, children: null };
    const items = [tmp.card, style];
    obj1[0] = items;
    const intl3 = tmp6(1236).intl;
    obj1[1] = intl3.string(tmp6(1236).t["Uv/eTx"]);
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    obj2[2] = formatResult;
    obj1[2] = jsx(tmp6(4338).Text, { variant: "text-md/normal", color: "text-default", children: null });
    return jsx(tmp2(5815), { style: null, title: null, children: null });
  }
  const arr = useGetOrFetchApplications(applicationIds);
};