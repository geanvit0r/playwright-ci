// @ts-check
//chamando o playwright na estrutura de testes
import { test, expect } from '@playwright/test';

test('Login - Success', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');

  const button = await page.getByRole('button', {name: 'Send Mail'})
  await button.scrollIntoViewIfNeeded()
  await button.click()

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('dialog', { name: 'Login realizado' })).toBeVisible();
});

