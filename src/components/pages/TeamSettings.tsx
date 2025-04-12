import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function TeamSettings() {
  const [showMenu, setShowMenu] = useState<number | null>(null);

  // メニューの表示・非表示を切り替える
  const toggleMenu = (index: number) => {
    setShowMenu(prevState => prevState === index ? null : index);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* サイドメニュー */}
      <div className="w-64 bg-[#EFF2FC] flex flex-col h-full border-r border-[#D9D8D3]">
        <div className="flex items-center px-5 py-6">
          <div className="flex items-center gap-1">
            <img src="/icons/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-lg">LOGO</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-6">
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-[#BFCEFC]">
              <img src="/icons/home.svg" alt="Home" className="w-5 h-5" />
              <span>ホーム</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-[#BFCEFC]">
              <img src="/icons/payment.svg" alt="Payment" className="w-5 h-5" />
              <span>決済管理</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-md bg-[#BFCEFC]">
              <img src="/icons/team-settings.svg" alt="Team" className="w-5 h-5" />
              <span>チーム設定</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-[#BFCEFC]">
              <img src="/icons/account.svg" alt="Account" className="w-5 h-5" />
              <span>アカウント管理</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-[#BFCEFC]">
              <img src="/icons/inventory.svg" alt="Inventory" className="w-5 h-5" />
              <span>備品管理</span>
            </a>
          </div>
        </nav>
        
        <div className="px-4 py-4 mt-auto">
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-[#BFCEFC]">
            <img src="/icons/settings.svg" alt="Settings" className="w-5 h-5" />
            <span>設定</span>
          </a>
          <div className="flex items-center gap-3 px-4 py-2 text-sm border border-[#D9D8D3] rounded-md mt-2">
            <img src="/icons/user.svg" alt="User" className="w-5 h-5" />
            <div className="flex flex-col">
              <span>やまもとはなこ</span>
              <span className="text-xs text-[#8C8B87]">hana@mitsubishielectric.co.jp</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 垂直区切り線 */}
      <Separator orientation="vertical" className="h-full separator" />
      
      {/* メインコンテンツ */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* ヘッダー */}
        <header className="border-b border-[#D9D8D3]">
          <div className="flex justify-between items-center px-10 py-4">
            <h1 className="font-bold text-xl">チーム設定</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-md border-[#C8C7C2]">
                <img src="/icons/team-icon.svg" alt="Team" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>
        
        {/* コンテンツ */}
        <main className="flex-1 p-10 space-y-6 overflow-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-md border-[#C8C7C2]">
                <img src="/icons/action-edit.svg" alt="Edit" className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-md border-[#C8C7C2]">
                <img src="/icons/action-list.svg" alt="List" className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-md border-[#C8C7C2]">
                <img src="/icons/action-filter.svg" alt="Filter" className="w-5 h-5" />
              </Button>
              <div className="relative">
                <Input 
                  placeholder="検索" 
                  className="w-60 pl-9 border border-[#C8C7C2] rounded-md h-9 text-sm"
                />
                <img 
                  src="/icons/search.svg" 
                  alt="Search" 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                />
              </div>
            </div>
            <Button variant="outline" className="rounded-md flex items-center gap-2 h-8 px-3 py-0 border-[#C8C7C2]">
              <img src="/icons/add.svg" alt="Add" className="w-4 h-4" />
              <span className="text-xs">チームを追加</span>
            </Button>
          </div>
          
          <div className="border border-[#D9D8D3] rounded-md overflow-hidden">
            <Table>
              <TableHeader className="bg-[#EFF2FC]">
                <TableRow className="border-b-0 hover:bg-[#EFF2FC]">
                  <TableHead className="w-[240px] font-normal">
                    <span className="ml-8">チーム名称</span>
                  </TableHead>
                  <TableHead className="font-normal">目的 / メモ</TableHead>
                  <TableHead className="w-[100px] text-right font-normal">
                    チャンネル数
                  </TableHead>
                  <TableHead className="w-[100px] text-right font-normal">
                    参加人数
                    <img src="/icons/sort.svg" alt="Sort" className="inline ml-1 w-4 h-4 cursor-pointer" />
                  </TableHead>
                  <TableHead className="w-[200px] font-normal">オーナー</TableHead>
                  <TableHead className="w-[120px] text-right font-normal">
                    アクセス
                    <img src="/icons/sort-alt.svg" alt="Sort" className="inline ml-1 w-4 h-4 cursor-pointer" />
                  </TableHead>
                  <TableHead className="w-[120px] text-right font-normal">
                    最終アクセス
                    <img src="/icons/sort-time.svg" alt="Sort" className="inline ml-1 w-4 h-4 cursor-pointer" />
                  </TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 15 }).map((_, index) => (
                  <TableRow key={index} className="h-16">
                    <TableCell className="py-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 bg-[#C13FFF]">
                          <AvatarFallback className="bg-[#D7DEFB] text-xs text-black">BM</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm">◯◯◯ビル管理</span>
                          <span className="text-xs text-[#8C8B87]">AbCdEfG00000000</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm py-3">ビル管理</TableCell>
                    <TableCell className="text-right text-sm py-3">4</TableCell>
                    <TableCell className="text-right text-sm py-3">15</TableCell>
                    <TableCell className="py-3">
                      <div className="flex flex-col">
                        <span className="text-sm">{index % 2 === 0 ? 'やまもとたろう' : 'やまもとはなこ'}</span>
                        <span className="text-xs text-[#8C8B87]">taro@dic.co.jp</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 px-8">
                      <div className="flex justify-center">
                        <Badge 
                          variant="outline" 
                          className={`badge text-xs ${index === 6 || index === 7 ? 'bg-[#FCEBEA] text-[#81001F] border-[#FCEBEA]' : 'bg-[#EFEEEB] text-[#3F3F3D] border-[#EFEEEB]'}`}
                        >
                          Label
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-sm py-3">今日 10:00</TableCell>
                    <TableCell className="relative py-3">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="rounded-md h-8 w-8" 
                        onClick={() => toggleMenu(index)}
                      >
                        <img src="/icons/more-gray.svg" alt="More" className="w-5 h-5" />
                      </Button>
                      
                      {/* ドロップダウンメニュー */}
                      {showMenu === index && (
                        <div className="absolute right-0 mt-1 bg-white rounded-md shadow-menu border border-[#D9D8D3] p-2 w-[120px] z-10">
                          <div className="flex flex-col">
                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-[#EFF2FC] rounded-md">
                              <img src="/icons/edit.svg" alt="Edit" className="w-5 h-5" />
                              <span>編集</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-[#EFF2FC] rounded-md text-[#CE0037]">
                              <img src="/icons/delete.svg" alt="Delete" className="w-5 h-5" />
                              <span>削除</span>
                            </a>
                          </div>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
} 