PM2_NAME := Explorer-stonegaze

install:
	@echo "Installing dependencies..."
	@npm install
	@echo "Installation completed."

pull:
	@echo "Pulling latest changes from the repository..."
	@git pull
	@echo "Pull completed."

build:
	@echo "Building the project..."
	@npm run build
	@echo "Build completed."

restart-pm2:
	@echo "Restarting the apps..."
	@pm2 restart $(PM2_NAME)
	@echo "Apps restarted."

delete-next-folder:
	@echo "Delete .next folder..."
	@rm -rf .next
	@echo "Delete success."

restart: pull install delete-next-folder build restart-pm2