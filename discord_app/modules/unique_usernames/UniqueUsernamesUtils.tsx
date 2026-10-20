// === Module 15803: UniqueUsernamesUtils ===

// Module 15803 (UniqueUsernamesUtils)
import util from "util" /* 1128 */;
import _mod6441 from "module_6441" /* 6441 */;
import UniqueUsernamesTypes from "UniqueUsernamesTypes" /* 15798 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(first1) {
  const match = _mod6441.match(first1);
  let obj = { error: null };
  const P = _mod6441.P;
  obj.error = P.not(_mod6441.P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  });
  const withResult1 = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error }));
  const withResult2 = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.AVAILABLE, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.PgfBSx);
    return obj;
  });
  const withResult3 = match.with({ rateLimited: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.RATE_LIMIT, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: UniqueUsernamesTypes.NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.AVAILABLE, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: UniqueUsernamesTypes.NameValidationState.ERROR, message: null };
    const intl = util.intl;
    obj.message = intl.string(util.t.mCrAUb);
    return obj;
  });
  const obj2 = { error: _mod6441.P.nullish };
  return withResult3.with({ error: _mod6441.P.nullish }, () => ({ type: UniqueUsernamesTypes.NameValidationState.INTERNAL_ERROR, message: "" })).otherwise(() => {

  });
};