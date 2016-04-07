
publish:
	npm publish

publish-sync: publish
	cnpm sync component-init
	tnpm sync component-init
