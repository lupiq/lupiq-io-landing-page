#!/bin/sh
# Run by relwolf (pre-commit-script) so that the generated changelog passes the Prettier check.
# relwolf runs in a Docker container without pnpm, so Prettier is invoked through Node directly.
set -e
node node_modules/prettier/bin/prettier.cjs --write .
