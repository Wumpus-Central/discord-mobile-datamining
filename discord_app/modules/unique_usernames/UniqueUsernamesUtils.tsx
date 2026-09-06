// discord_app/modules/unique_usernames/UniqueUsernamesUtils.tsx
import util from "../../intl/index.native.tsx";
import _mod4745 from "module_4745" /* 4745 */;
import UniqueUsernamesTypes from "UniqueUsernamesTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(config) {
  const match = _mod4745.match(config);
  let obj = { error: null };
  const P = _mod4745.P;
  obj.error = P.not(_mod4745.P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  });
  const withResult1 = match
    .with({ rateLimited: true }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.T15lqn);
      return obj;
    })
    .with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error }));
  const withResult2 = match
    .with({ rateLimited: true }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.T15lqn);
      return obj;
    })
    .with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error }))
    .with({ taken: false }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.AVAILABLE, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.PgfBSx);
      return obj;
    });
  obj = { error: _mod4745.P.nullish };
  const withResult3 = match
    .with({ rateLimited: true }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.T15lqn);
      return obj;
    })
    .with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error }))
    .with({ taken: false }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.AVAILABLE, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.PgfBSx);
      return obj;
    })
    .with({ taken: true }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.ERROR, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.mCrAUb);
      return obj;
    });
  return match
    .with({ rateLimited: true }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.T15lqn);
      return obj;
    })
    .with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error }))
    .with({ taken: false }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.AVAILABLE, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.PgfBSx);
      return obj;
    })
    .with({ taken: true }, () => {
      const obj = { type: UniqueUsernamesTypes.NameValidationState.ERROR, message: null };
      const intl = util.intl;
      obj.message = intl.string(util.t.mCrAUb);
      return obj;
    })
    .with(obj, () => ({ type: UniqueUsernamesTypes.NameValidationState.INTERNAL_ERROR, message: "" }))
    .otherwise(() => {});
};
