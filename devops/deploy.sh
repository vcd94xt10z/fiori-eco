#!/bin/bash

echo "------------------------------------------------------"
echo "UI5 build"
echo "------------------------------------------------------"
ui5 build

echo "------------------------------------------------------"
echo "Deploy"
echo "------------------------------------------------------"
npm run deploy

echo "------------------------------------------------------"
echo "Processo finalizado"
echo "------------------------------------------------------"