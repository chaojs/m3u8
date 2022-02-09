APP_NAME := m3u8
APP_VERSION := 0.1.1
BIN_NAME := m3u8

SHELL := /bin/bash

build:
	npm run build

dev:
	npm run dev

fmt:
	npm run fmt

publish:
	npm publish --access public

release:
	npm run release
