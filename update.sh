#!/usr/bin/env bash
# Copy the newest State of GBOT card into the site.
set -euo pipefail
cd "$(dirname "$0")"
latest=$(ls -1 /workspace/gbot-state/state-*.png 2>/dev/null | sort | tail -n1)
[ -n "$latest" ] || { echo "no state card found"; exit 1; }
cp "$latest" assets/state-latest.png
cp /workspace/gbot-state/recap-day1.png assets/recap-day1.png 2>/dev/null || true
d=$(basename "$latest" .png); d=${d#state-}
sed -i -E "s#(id=\"state-date\">)[^<]*#\1${d}#" index.html
echo "updated -> $latest"
