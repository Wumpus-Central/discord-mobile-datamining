// discord_app/modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx
import GuildRecord from "../../records/GuildRecord.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c4, c5, closure_0, dependencyMap;

const isGuildOwner = GuildRecord.isGuildOwner;
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx",
);

export default function useCreateCreatorMonetizationAcceptTermsRequest(arg0, arg1) {
  let closure_3;
  let isExpeditedOnboardingGuild;
  let items1;
  let items2;
  let items3;
  let obj4;
  let tmp5;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const tmp2 = isExpeditedOnboardingGuild(react.useState(), 2);
  dependencyMap = tmp2[1];
  const first = tmp2[0];
  const tmp4 = isExpeditedOnboardingGuild(react.useState(false), 2);
  [tmp5, _asyncToGenerator] = tmp4;
  let obj2 = require("CreatorMonetizationEligibilityExperimentUtils");
  isExpeditedOnboardingGuild = obj2.useIsExpeditedOnboardingGuild(stateFromStores);
  let obj3 = {
    canSubmitAcceptance: obj4.useStateFromStores(
      items1,
      () => {
        const tmp3 = null != stateFromStores && isGuildOwner(tmp2, tmp);
        return tmp3;
      },
      items2,
    ),
    error: first,
    loading: tmp5,
    submitAcceptTermsRequest: react.useCallback(
      _asyncToGenerator(async function () {
        let closure_2;
        let obj3;
        let obj5;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp4;
                if (null != closure_0) {
                  _asyncToGenerator(true);
                  closure_3(undefined);
                  c3 = 2;
                  if (null != tmp) {
                    c4 = 4;
                    c5 = 1;
                    const obj6 = { value: obj5.acceptCreatorMonetizationTerms(closure_0, tmp36), done: false };
                    obj5 = tmp41(c3[8]);
                    return obj6;
                  } else {
                    c4 = 3;
                    c5 = 1;
                    const obj7 = { value: obj3.acceptCreatorMonetizationTermsV2(closure_0), done: false };
                    obj3 = tmp41(c3[8]);
                    return obj7;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_129_4(false);
              throw tmp41;
            } else {
              if (2 === c4) {
                c3 = 1;
                closure_0 = tmp41;
                const self = this;
                const self2 = this;
                const tmp19 = new tmp(c3[9])(closure_0);
                closure_129_3(tmp19);
              } else {
                if (3 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    closure_129_4(false);
                    c5 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_129_4(false);
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                c3 = 1;
              }
              c3 = 0;
              closure_129_4(false);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp41) {
            if (0 === c3) {
              c5 = 3;
              throw tmp41;
            } else if (1 === tmp43) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      }),
      items3,
    ),
  };
  obj4 = require("get initialized");
  items1 = [UserStore];
  items2 = [stateFromStores];
  items3 = [arg0, arg1, isExpeditedOnboardingGuild];
  return obj3;
}
