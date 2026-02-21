export default {
  spec_dir: 'build/spec',
  spec_files: ['**/*Spec.js'],
  helpers: ['helpers/**/*.?(m)js'],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true,
  },
};
