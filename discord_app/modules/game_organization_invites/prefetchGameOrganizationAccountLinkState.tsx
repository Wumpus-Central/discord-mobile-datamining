// discord_app/modules/game_organization_invites/prefetchGameOrganizationAccountLinkState.tsx
import ApplicationActionCreatorsDefault from "../applications/ApplicationActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import AuthorizedAppsStore from "../oauth2/AuthorizedAppsStore.tsx";
import GameOrganizationInviteStore from "GameOrganizationInviteStore.tsx";

const require = fn;
let closure_9 = async function _prefetchGameOrganizationAccountLinkState(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          let authorizationApp;
          closure_130_2 = undefined;
          invite = invite.getInvite(closure_0);
          let state;
          if (invite != null) {
            state = invite.state;
          }
          if (state === constants.RESOLVED) {
            let id = invite.application.id;
            closure_130_0 = id;
            c4 = 1;
            const items = [id];
            c5 = 2;
            c6 = 1;
            const obj5 = { value: ApplicationActionCreatorsDefault.fetchApplications(items, false), done: false };
            return obj5;
          } else {
            c6 = 3;
          }
        }
      } else if (1 === tmp7) {
        c4 = 0;
        c6 = 3;
        return { value: "IconComponent", done: null };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c4 = 0;
        authorizationApp = closure_131_0(closure_131_2[6]).getAuthorizationApp(
          closure_131_4.getApplication(closure_130_0),
        );
        if (null != authorizationApp) {
          const parentId = authorizationApp.parentId;
          id = parentId;
          if (parentId == null) {
            id = authorizationApp.id;
          }
          closure_130_2 = id;
          if (closure_131_5.getFetchStateForApplication(closure_130_2) === closure_131_6.NOT_FETCHED) {
            const items1 = [closure_130_2];
            const response = closure_131_1(closure_131_2[7]).fetch(items1);
            const obj7 = closure_131_1(closure_131_2[7]);
          }
        }
        const obj6 = closure_131_0(closure_131_2[6]);
      }
      c4 = 0;
      c6 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp20) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp20;
      } else {
        c5 = tmp;
      }
    }
  }
};
const FetchState = fn(7189).FetchState;
let closure_8 = fn(10994).GameOrganizationInviteStates;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/prefetchGameOrganizationAccountLinkState.tsx",
);

export default function prefetchGameOrganizationAccountLinkState() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
