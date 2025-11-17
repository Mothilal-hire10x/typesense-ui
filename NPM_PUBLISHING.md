# 📦 NPM Publishing Guide - Typesense UI

## 🎯 How to Publish to NPM

Follow these steps to publish your Typesense UI to the NPM registry:

---

## 📋 Prerequisites

1. **NPM Account**
   - Create account at https://www.npmjs.com/signup
   - Verify your email address

2. **Login to NPM**
   ```bash
   npm login
   # Enter your username, password, and email
   ```

3. **Check Login Status**
   ```bash
   npm whoami
   # Should show your NPM username
   ```

---

## 🚀 Step-by-Step Publishing

### Step 1: Update Package Information

**Edit `package.json`** and update these fields:

```json
{
  "name": "typesense-ui",  // Or "@yourusername/typesense-ui" for scoped
  "version": "1.0.0",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/typesense-ui.git"
  }
}
```

**Important:** Choose a unique name!
- Check availability: `npm search typesense-ui`
- If taken, use scoped package: `@yourusername/typesense-ui`

---

### Step 2: Install Express (Required for CLI)

```bash
npm install express
```

---

### Step 3: Build the Project

```bash
npm run build
```

This creates the `dist/` folder with production files.

---

### Step 4: Test Locally

**Test the package before publishing:**

```bash
# In your project directory
npm link

# Test it works
typesense-ui
# Should start the server at localhost:3000
```

**Or test with npx:**

```bash
# In project directory
npx . 
```

---

### Step 5: Publish to NPM

**First time publishing:**

```bash
npm publish
```

**For scoped packages:**

```bash
npm publish --access public
```

---

### Step 6: Verify Publication

1. **Check on NPM:**
   - Visit: https://www.npmjs.com/package/typesense-ui

2. **Test Installation:**
   ```bash
   # In a different directory
   npx typesense-ui
   ```

---

## 🔄 Updating Your Package

### Update Version

Use semantic versioning:

```bash
# Patch release (1.0.0 -> 1.0.1) - bug fixes
npm version patch

# Minor release (1.0.0 -> 1.1.0) - new features
npm version minor

# Major release (1.0.0 -> 2.0.0) - breaking changes
npm version major
```

### Publish Update

```bash
npm publish
```

---

## 📝 Version Guidelines

Follow **Semantic Versioning** (semver):

- **1.0.0** - Initial release
- **1.0.1** - Bug fixes only
- **1.1.0** - New features, backwards compatible
- **2.0.0** - Breaking changes

Example workflow:
```bash
# Fix a bug
npm version patch
npm publish

# Add new feature
npm version minor
npm publish

# Breaking change
npm version major
npm publish
```

---

## 🎨 Optional: Add NPM Badges to README

Add these to your README.md:

```markdown
[![npm version](https://badge.fury.io/js/typesense-ui.svg)](https://www.npmjs.com/package/typesense-ui)
[![npm downloads](https://img.shields.io/npm/dm/typesense-ui.svg)](https://www.npmjs.com/package/typesense-ui)
[![license](https://img.shields.io/npm/l/typesense-ui.svg)](https://github.com/yourusername/typesense-ui/blob/main/LICENSE)
```

---

## 🔧 Troubleshooting

### Error: Package name already exists

**Solution:** Use scoped package name

```json
{
  "name": "@yourusername/typesense-ui"
}
```

Then publish with:
```bash
npm publish --access public
```

---

### Error: Need to login

```bash
npm logout
npm login
```

---

### Error: Build failed

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

### Error: Permission denied

```bash
# Make CLI executable
chmod +x bin/cli.js
```

---

## 📊 Monitor Your Package

### View Statistics

- **NPM Stats**: https://npm-stat.com/charts.html?package=typesense-ui
- **Downloads**: https://www.npmjs.com/package/typesense-ui

### Package Info

```bash
npm info typesense-ui
```

---

## 🎯 Best Practices

1. **Always test before publishing**
   ```bash
   npm run build
   npm link
   typesense-ui  # Test it works
   ```

2. **Write good changelog**
   - Document all changes
   - Keep CHANGELOG.md updated

3. **Use .npmignore**
   - Exclude dev files
   - Keep package size small

4. **Semantic versioning**
   - Follow semver strictly
   - Don't skip versions

5. **Good README**
   - Clear installation instructions
   - Usage examples
   - Screenshots

---

## 🚀 Quick Reference Commands

```bash
# Check package is valid
npm pack --dry-run

# See what will be published
npm publish --dry-run

# Publish
npm publish

# Update and publish
npm version patch && npm publish

# Unpublish (within 72 hours)
npm unpublish typesense-ui@1.0.0

# Deprecate version
npm deprecate typesense-ui@1.0.0 "Please upgrade to 1.0.1"
```

---

## ✅ Checklist Before Publishing

- [ ] Updated version in package.json
- [ ] Updated author and repository URLs
- [ ] Built project (`npm run build`)
- [ ] Tested locally (`npm link` and run)
- [ ] Updated README.md
- [ ] Added LICENSE file
- [ ] Committed all changes to git
- [ ] Logged into NPM (`npm whoami`)
- [ ] Ready to publish!

---

## 🎉 After Publishing

**Tell the world!**

1. Tweet about it
2. Post on Reddit (r/javascript, r/typescript)
3. Share on LinkedIn
4. Add to Awesome lists
5. Create GitHub release
6. Update documentation

---

## 📞 Support

If you encounter issues:

1. Check NPM docs: https://docs.npmjs.com/
2. NPM support: https://www.npmjs.com/support
3. Stack Overflow: [npm] tag

---

**Your package will be available at:**
- NPM: `https://www.npmjs.com/package/typesense-ui`
- Install: `npm install -g typesense-ui`
- Run: `npx typesense-ui`

🎊 **Good luck with your open source project!** 🎊
