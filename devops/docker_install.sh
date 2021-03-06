#!/bin/bash

echo "------------------------------------------------------"
echo "Atualizando APK"
echo "------------------------------------------------------"
apk update

echo "------------------------------------------------------"
echo "Instalando NPM"
echo "------------------------------------------------------"
apk add npm

echo "------------------------------------------------------"
echo "Instalando UI5"
echo "------------------------------------------------------"
npm install --global @ui5/cli

echo "------------------------------------------------------"
echo "Instalando NWABAP"
echo "------------------------------------------------------"
npm install --global nwabap-ui5uploader

echo "------------------------------------------------------"
echo "Instalando DependĂȘncias"
echo "------------------------------------------------------"
npm install