# Build CSS file
build-css:
	gulp styles

## Build min CSS file
build-mincss:
	gulp stylesMin

# Build min JS file
build-minjs:
	gulp scriptsMin

# Start watching
watching:
	gulp watching

# Clean dist directory
clean:
	gulp cleanDist

# Default task
gulp:
	gulp

# Build
build:
	gulp build
