# UTubeTrollKiller

### Say goodbye to the UTTP

Imagine this... You post a fan video of DannoCal, Glitch, SMG4, Game Theory, etc., and then you see a whole load of this being spammed by UTTP crackheads:

> WHO ASKED + UTTP IS BETTER THAN DANNOCAL, GLITCH, SMG4, MURDER DRONES, TADC, AND ALL FANDOMS

Well, you can now kiss goodbye to these duncefucks with UTTK, or UTubeTrollKiller by NXX99. It fetches channel IDs in a console log so you can copy and paste them into youtube studio's blacklist feature!

###### Note: This is a dumbed down version of a script by Switch

__Requirements__

* A PC
* NodeJS
* [YoutubeI]("https://www.npmjs.com/package/youtubei")

Don't have these? Here's some steps for various OSes

__Windows Installation__

First, open Powershell and install ["scoop"]("https://scoop.sh/")

Second, in a Powershell or CMD window, run `scoop install nodejs`

__MacOS installation__

First, download and run the package file from ["the official NodeJS download page"]("https://nodejs.org/en/download")

__Linux installation__

On Debian/Debian based distros (Ubuntu and its flavors, Pop!_os, KDE neon, Q4OS, Linux mint, so on and so forth,) run `apt-get install nodejs`. If you're not root, put sudo before the command.

On RHEL-Based distros (Red Hat, Fedora, CentOS, OpenSUSE, etc.,) run `rpm install nodejs`, of course, as sudo if you're not root.

For any other distro (arch, gentoo, or Linux From Scratch,) or other UNIX-Based OSes (Such as BSD distrobutions like FreeBSD and OpenBSD, Solaris,) look up a tutorial on how to install NodeJS.

To verify, run `node .help` to see if you installed NodeJS.

After installing and verifying, run `npm install youtubei`.

Afterwards, clone this repository and CD into it, and run `node index.js`, and you should be seeing a slew of channel IDs separated by commas and spaces. Let it run for about 30 minutes or an hour before stopping, and copy every channel ID, go into youtube studio, and paste them under hidden users.