# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2025-08-21

### Fixed

- Fix asset paths for GitHub Pages deployment by using Nunjucks path filter in HTML templates

## [2.0.0] - 2025-08-21

### Changed

- Replace external placeholder images with local assets
- Migrate faker to modern @faker-js/faker package
- Update Bootstrap from v4 to v5 and migrate all components (via foehn package v1 to v2):
  - sr-only → visually-hidden, sr-only-focusable → visually-hidden-focusable (44 files)
  - embed-responsive → ratio ratio-16x9
  - card-block → card-body
  - form-group → mb-3
  - form-control-feedback → invalid-feedback
  - badge-pill → rounded-pill
  - data-toggle → data-bs-toggle, data-target → data-bs-target

  Modified components:
  - badge/badge.html
  - card/card.html
  - media/embed-container/google-map/google-map.html
  - media/embed-container/video/video.html
  - navigation/nav-horizontal/nav-horizontal.html
  - lists/tree-view/tree-view.html
  - forms/input/input.html
  - forms/textarea/textarea.html
  - forms/select/select.html
  - forms/fieldset/fieldset.html
  - forms/datalist/datalist.html
  - forms/dates/dates.html
  - And 32 other files with sr-only class updates

## [1.9.0] - 2023-09-14

### Added

- Link list component documentation
- Login form component documentation
- Authorities news component documentation
- Accordion component documentation
- Featured card component documentation

### Changed

- Upgrade to Foehn v2.0.0
- Update all dependencies
- Update component documentation to comply with Bootstrap 5

## [1.8.1] - 2021-09-10

### Changed

- Upgrade to Foehn v1.8.2
- Update node dependencies

## [1.8.0] - 2021-01-21

### Changed

- Separate Foehn assets and documentation into different packages
  - Foehn CSS/JS assets moved to [DSI-VD/foehn](https://github.com/DSI-VD/foehn)
  - Component documentation remains in this repository
- Remove unused node modules and update dependencies

---

_Note: Versions 1.7.0 and earlier contained mixed changelog entries from both the Foehn package and this documentation project. This has been cleaned up starting from version 1.8.0 when the packages were separated._

[Unreleased]: https://github.com/DSI-VD/foehn-design-system/compare/v2.0.1...HEAD
[2.0.1]: https://github.com/DSI-VD/foehn-design-system/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/DSI-VD/foehn-design-system/compare/v1.9.0...v2.0.0
[1.9.0]: https://github.com/DSI-VD/foehn-design-system/compare/v1.8.1...v1.9.0
[1.8.1]: https://github.com/DSI-VD/foehn-design-system/compare/v1.8.0...v1.8.1
[1.8.0]: https://github.com/DSI-VD/foehn-design-system/releases/tag/v1.8.0
