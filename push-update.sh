#!/bin/bash
cd '/Users/nathanheumann/Desktop/Lane Social Co/website'
rm -f .git/index.lock
rm -f .git/HEAD.lock
rm -f .git/refs/heads/master.lock
git add assets/global.css
git commit -m "Fix audit card white text in light mode"
git push origin master
echo "Done! Site will be live in about 60 seconds."
