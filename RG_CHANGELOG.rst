RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `quince-rg.1`

Header synchronization with upstream occurs at the time of a major release, such as Palm, Quince, Redwood, etc. If there were no changes in our version of the header between major releases, we simply add a note stating that a sync was performed with the specified upstream header version.

[Unreleased]
************

[redwood-rg.2] - 2024-11-13
***************************

Changed:
========
* Update the @edx/frontend-component-cookie-policy-banner package version to redwood-rg.1

[redwood-rg.1] - 2024-10-04
***************************

Fix:
====
* Overlapping navigation elements for studio-header (RGOeX-26453)

Changed:
========
* Improve Gitlab CI checkers speed (RGOeX-26785)
* Update the @edx/frontend-component-cookie-policy-banner package (RGOeX-26785)

Sync
====
Syncronized with upstream's version 5.0.2 (RGInt-115)

[quince-rg.1] - 2024-03-13
**************************

Added:
=====
* Added inclusion for cookie banner styles (RGOeX-26418)

Fix:
====
* Changed cookie banner version in package-lock.json (RGOeX-26418)
* Changed cookie banner version in package.json (RGOeX-26418)
* Changed import path to cookie banner styles (RGOeX-26418)
* Fix a typo for the Studio URL in the studio header dropdown (RGOeX-26419). This commit should be dropped when rebasing on upstream version 4.9.3+
* Fixup the cookie banner styles import introduced in RGOeX-26418 (RGOeX-26437)
* Fixed Studio Header in cases when course title is too long (RGOeX-26425)
    * We don't need to remove these fixes in the future, because all these modifications will be added when we reach header version 4.10.1 or higher. Let's delete this row after header version 4.10.1
* Removed not correct hover color on the Back to Instructor Dashboard button (RGOeX-26235)

[palm-rg.2] release 2023-12-01
******************************

Added:
=====
* Applied the same style to cookie banners on all MFE pages (RGOeX-26235)

[palm-rg.1] 2023-11-03 (Palm RG release)
****************************************

Added:
=====
* add CI checkers: add pre-commit-hooks, .gitlab-ci.yml, style checkers (RGOeX-24524)(MC-36)
* add Gamification links in the MFE header by env flag (RGOeX-24524)(RGOeX-24821)

Changed:
========
* add logo to header components from the brand package (RGOeX-24524)
* update translations from Translations (RGOeX-24524)
